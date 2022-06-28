import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end" | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardStampProps = typeof __propDef.props;
export declare type CardStampEvents = typeof __propDef.events;
export declare type CardStampSlots = typeof __propDef.slots;
export default class CardStamp extends SvelteComponentTyped<CardStampProps, CardStampEvents, CardStampSlots> {
}
export {};
