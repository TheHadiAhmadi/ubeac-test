import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        transparent?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardFooterProps = typeof __propDef.props;
export declare type CardFooterEvents = typeof __propDef.events;
export declare type CardFooterSlots = typeof __propDef.slots;
export default class CardFooter extends SvelteComponentTyped<CardFooterProps, CardFooterEvents, CardFooterSlots> {
}
export {};
