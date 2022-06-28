import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        placement?: "start" | "end" | "center" | undefined;
        type?: "solid" | "dashed" | "dotted" | undefined;
        variant?: "middle" | "inset" | "full" | undefined;
        vertical?: boolean | undefined;
        width?: "medium" | "thick" | "thin" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DividerProps = typeof __propDef.props;
export declare type DividerEvents = typeof __propDef.events;
export declare type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<DividerProps, DividerEvents, DividerSlots> {
}
export {};
