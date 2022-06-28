import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        placement?: "start" | "end" | "top" | "bottom" | "middle" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardMediaProps = typeof __propDef.props;
export declare type CardMediaEvents = typeof __propDef.events;
export declare type CardMediaSlots = typeof __propDef.slots;
export default class CardMedia extends SvelteComponentTyped<CardMediaProps, CardMediaEvents, CardMediaSlots> {
}
export {};
