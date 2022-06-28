import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        placement?: 'top' | 'bottom' | 'start' | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardStatusProps = typeof __propDef.props;
export declare type CardStatusEvents = typeof __propDef.events;
export declare type CardStatusSlots = typeof __propDef.slots;
export default class CardStatus extends SvelteComponentTyped<CardStatusProps, CardStatusEvents, CardStatusSlots> {
}
export {};
