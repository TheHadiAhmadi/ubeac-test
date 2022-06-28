import { SvelteComponentTyped } from "svelte";
import type { Colors } from '../../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Colors;
        size?: "sm" | "md" | undefined;
        style?: "grow" | "border" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SpinnerProps = typeof __propDef.props;
export declare type SpinnerEvents = typeof __propDef.events;
export declare type SpinnerSlots = typeof __propDef.slots;
export default class Spinner extends SvelteComponentTyped<SpinnerProps, SpinnerEvents, SpinnerSlots> {
}
export {};
