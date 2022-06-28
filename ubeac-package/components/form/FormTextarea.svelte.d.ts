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
        'inner:start': {};
        'inner:end': {};
    };
};
export declare type FormTextareaProps = typeof __propDef.props;
export declare type FormTextareaEvents = typeof __propDef.events;
export declare type FormTextareaSlots = typeof __propDef.slots;
export default class FormTextarea extends SvelteComponentTyped<FormTextareaProps, FormTextareaEvents, FormTextareaSlots> {
}
export {};
