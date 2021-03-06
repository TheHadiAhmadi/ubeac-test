import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: "sm" | "md" | "lg" | undefined;
        vertical?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonGroupProps = typeof __propDef.props;
export declare type ButtonGroupEvents = typeof __propDef.events;
export declare type ButtonGroupSlots = typeof __propDef.slots;
export default class ButtonGroup extends SvelteComponentTyped<ButtonGroupProps, ButtonGroupEvents, ButtonGroupSlots> {
}
export {};
