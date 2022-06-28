import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        stacked?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AvatarGroupProps = typeof __propDef.props;
export declare type AvatarGroupEvents = typeof __propDef.events;
export declare type AvatarGroupSlots = typeof __propDef.slots;
export default class AvatarGroup extends SvelteComponentTyped<AvatarGroupProps, AvatarGroupEvents, AvatarGroupSlots> {
}
export {};
