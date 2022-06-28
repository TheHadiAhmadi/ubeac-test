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
export declare type CardTitleProps = typeof __propDef.props;
export declare type CardTitleEvents = typeof __propDef.events;
export declare type CardTitleSlots = typeof __propDef.slots;
export default class CardTitle extends SvelteComponentTyped<CardTitleProps, CardTitleEvents, CardTitleSlots> {
}
export {};
