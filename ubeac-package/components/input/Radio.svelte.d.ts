import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        forwardEvents?: ((node: HTMLElement | SVGElement) => {
            destroy: () => void;
        }) | undefined;
        group?: any;
        value?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RadioProps = typeof __propDef.props;
export declare type RadioEvents = typeof __propDef.events;
export declare type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponentTyped<RadioProps, RadioEvents, RadioSlots> {
}
export {};
