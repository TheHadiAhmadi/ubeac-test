import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        description?: string | undefined;
        inline?: boolean | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FormCheckboxProps = typeof __propDef.props;
export declare type FormCheckboxEvents = typeof __propDef.events;
export declare type FormCheckboxSlots = typeof __propDef.slots;
export default class FormCheckbox extends SvelteComponentTyped<FormCheckboxProps, FormCheckboxEvents, FormCheckboxSlots> {
}
export {};
