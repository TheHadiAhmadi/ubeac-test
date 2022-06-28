import { bubble, listen, prevent_default, stop_propagation } from 'svelte/internal';
const regex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
export const forwardEventsBuilder = (component) => {
    let $on;
    const events = [];
    const forward = (event) => bubble(component, event);
    component.$on = (eventType, callback) => {
        if ($on)
            return $on(eventType, callback);
        events.push([eventType, callback]);
        return () => { };
    };
    return (node) => {
        const destructors = [];
        const forwards = {};
        $on = (eventType, callback) => {
            let options = false;
            if (eventType.match(regex)) {
                const parts = eventType.split(':');
                eventType = parts[0];
                const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
                if (eventOptions.passive) {
                    options = options || {};
                    options.passive = true;
                }
                if (eventOptions.nonpassive) {
                    options = options || {};
                    options.passive = false;
                }
                if (eventOptions.capture) {
                    options = options || {};
                    options.capture = true;
                }
                if (eventOptions.once) {
                    options = options || {};
                    options.once = true;
                }
                if (eventOptions.preventDefault) {
                    callback = prevent_default(callback);
                }
                if (eventOptions.stopPropagation) {
                    callback = stop_propagation(callback);
                }
            }
            const off = listen(node, eventType, callback, options);
            const destructor = () => {
                off();
                const index = destructors.indexOf(destructor);
                if (index == -1)
                    return;
                destructors.splice(index, 1);
            };
            destructors.push(destructor);
            if (!(eventType in forwards))
                forwards[eventType] = listen(node, eventType, forward);
            return destructor;
        };
        for (const event of events)
            $on(event[0], event[1]);
        const destroy = () => Object.values(forwards)
            .concat(destructors)
            .forEach((destructor) => destructor());
        return { destroy };
    };
};
export const forwardEventsBuilderNew = (component) => {
    const natives = {};
    component.$on = (eventType, callback) => {
        var _a;
        var _b;
        const isNative = `on${eventType}`.split(':').at(0).toLowerCase() in document;
        if (isNative) {
            const callbacks = natives[eventType] || (natives[eventType] = []);
            callbacks.push(callback);
            return () => { };
        }
        const callbacks = ((_a = (_b = component.$$.callbacks)[eventType]) !== null && _a !== void 0 ? _a : (_b[eventType] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index == -1)
                return;
            callbacks.splice(index, 1);
        };
    };
    return (node) => {
        const eventTypes = Object.keys(natives);
        const destructors = [];
        for (let eventType of eventTypes) {
            const callbacks = natives[eventType];
            for (let callback of callbacks) {
                let options = false;
                if (eventType.match(regex)) {
                    const parts = eventType.split(':');
                    eventType = parts[0];
                    const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
                    if (eventOptions.passive) {
                        options = options || {};
                        options.passive = true;
                    }
                    if (eventOptions.nonpassive) {
                        options = options || {};
                        options.passive = false;
                    }
                    if (eventOptions.capture) {
                        options = options || {};
                        options.capture = true;
                    }
                    if (eventOptions.once) {
                        options = options || {};
                        options.once = true;
                    }
                    if (eventOptions.preventDefault) {
                        callback = prevent_default(callback);
                    }
                    if (eventOptions.stopPropagation) {
                        callback = stop_propagation(callback);
                    }
                }
                const destructor = listen(node, eventType, callback, options);
                destructors.push(destructor);
            }
        }
        const destroy = () => destructors.forEach((destructor) => destructor());
        return { destroy };
    };
};
