import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        name?: string | undefined;
        pack?: "tabler" | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "auto" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
