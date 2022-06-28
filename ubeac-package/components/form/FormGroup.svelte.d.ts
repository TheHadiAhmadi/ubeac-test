import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
        'outer:start': {};
        'middle:start': {};
        'inner:start': {};
        default: {};
        'inner:end': {};
        'middle:end': {};
        'outer:end': {};
    };
};
export declare type FormGroupProps = typeof __propDef.props;
export declare type FormGroupEvents = typeof __propDef.events;
export declare type FormGroupSlots = typeof __propDef.slots;
export default class FormGroup extends SvelteComponentTyped<FormGroupProps, FormGroupEvents, FormGroupSlots> {
}
export {};
