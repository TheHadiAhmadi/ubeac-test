import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        elevation?: number | undefined;
        outline?: boolean | undefined;
        padding?: 'sm' | 'md' | 'lg' | undefined;
        tile?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardProps = typeof __propDef.props;
export declare type CardEvents = typeof __propDef.events;
export declare type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};
