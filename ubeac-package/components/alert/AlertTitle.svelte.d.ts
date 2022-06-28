import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AlertTitleProps = typeof __propDef.props;
export declare type AlertTitleEvents = typeof __propDef.events;
export declare type AlertTitleSlots = typeof __propDef.slots;
export default class AlertTitle extends SvelteComponentTyped<AlertTitleProps, AlertTitleEvents, AlertTitleSlots> {
}
export {};
