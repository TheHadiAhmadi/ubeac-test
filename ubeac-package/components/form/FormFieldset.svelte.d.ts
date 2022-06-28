import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FormFieldsetProps = typeof __propDef.props;
export declare type FormFieldsetEvents = typeof __propDef.events;
export declare type FormFieldsetSlots = typeof __propDef.slots;
export default class FormFieldset extends SvelteComponentTyped<FormFieldsetProps, FormFieldsetEvents, FormFieldsetSlots> {
}
export {};
