import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: string | undefined;
        id?: string | undefined;
        label?: string | undefined;
        loading?: boolean | undefined;
        required?: boolean | undefined;
        value?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'outer:start': {
            slot: string;
        };
        'middle:start': {
            slot: string;
        };
        'inner:start': {};
        'inner:end': {};
        'middle:end': {
            slot: string;
        };
        'outer:end': {
            slot: string;
        };
    };
};
export declare type FormInputProps = typeof __propDef.props;
export declare type FormInputEvents = typeof __propDef.events;
export declare type FormInputSlots = typeof __propDef.slots;
export default class FormInput extends SvelteComponentTyped<FormInputProps, FormInputEvents, FormInputSlots> {
}
export {};
