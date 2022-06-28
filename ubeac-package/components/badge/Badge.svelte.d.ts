import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        dot?: boolean | undefined;
        ghost?: boolean | undefined;
        href?: string | undefined;
        outline?: boolean | undefined;
        shape?: 'round' | 'tile' | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BadgeProps = typeof __propDef.props;
export declare type BadgeEvents = typeof __propDef.events;
export declare type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponentTyped<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
