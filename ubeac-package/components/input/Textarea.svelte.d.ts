import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        forwardEvents?: ((node: HTMLElement | SVGElement) => {
            destroy: () => void;
        }) | undefined;
        preview?: boolean | undefined;
        value?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TextareaProps = typeof __propDef.props;
export declare type TextareaEvents = typeof __propDef.events;
export declare type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponentTyped<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
