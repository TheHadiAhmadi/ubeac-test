import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        forwardEvents?: ((node: HTMLElement | SVGElement) => {
            destroy: () => void;
        }) | undefined;
        items?: Array<any> | Object | undefined;
        key?: string | undefined;
        preview?: boolean | undefined;
        text?: string | undefined;
        value?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SelectProps = typeof __propDef.props;
export declare type SelectEvents = typeof __propDef.events;
export declare type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
