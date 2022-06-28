import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        shape?: "circle" | "round" | "tile" | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AvatarProps = typeof __propDef.props;
export declare type AvatarEvents = typeof __propDef.events;
export declare type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
