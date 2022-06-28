import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        block?: boolean | undefined;
        color?: Colors;
        disabled?: boolean | undefined;
        elevation?: number | undefined;
        ghost?: boolean | undefined;
        href?: undefined | string;
        loading?: boolean | undefined;
        outline?: boolean | undefined;
        shape?: 'circle' | 'link' | 'round' | 'tile' | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
