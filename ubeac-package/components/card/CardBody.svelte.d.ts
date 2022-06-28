import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardBodyProps = typeof __propDef.props;
export declare type CardBodyEvents = typeof __propDef.events;
export declare type CardBodySlots = typeof __propDef.slots;
export default class CardBody extends SvelteComponentTyped<CardBodyProps, CardBodyEvents, CardBodySlots> {
}
export {};
