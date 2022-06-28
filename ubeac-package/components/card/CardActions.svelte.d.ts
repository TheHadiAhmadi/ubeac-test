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
export declare type CardActionsProps = typeof __propDef.props;
export declare type CardActionsEvents = typeof __propDef.events;
export declare type CardActionsSlots = typeof __propDef.slots;
export default class CardActions extends SvelteComponentTyped<CardActionsProps, CardActionsEvents, CardActionsSlots> {
}
export {};
