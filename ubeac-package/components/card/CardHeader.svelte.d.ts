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
export declare type CardHeaderProps = typeof __propDef.props;
export declare type CardHeaderEvents = typeof __propDef.events;
export declare type CardHeaderSlots = typeof __propDef.slots;
export default class CardHeader extends SvelteComponentTyped<CardHeaderProps, CardHeaderEvents, CardHeaderSlots> {
}
export {};
