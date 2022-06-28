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
export declare type CardSubtitleProps = typeof __propDef.props;
export declare type CardSubtitleEvents = typeof __propDef.events;
export declare type CardSubtitleSlots = typeof __propDef.slots;
export default class CardSubtitle extends SvelteComponentTyped<CardSubtitleProps, CardSubtitleEvents, CardSubtitleSlots> {
}
export {};
