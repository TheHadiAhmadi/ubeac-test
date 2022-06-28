import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        dismissible?: boolean | undefined;
        duration?: number | undefined;
        icon?: string | undefined;
        open?: boolean | undefined;
        type?: 'danger' | 'info' | 'success' | 'warning' | undefined;
        variant?: 'outlined' | 'filled' | undefined;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
        actions: {};
    };
};
export declare type AlertProps = typeof __propDef.props;
export declare type AlertEvents = typeof __propDef.events;
export declare type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
}
export {};
