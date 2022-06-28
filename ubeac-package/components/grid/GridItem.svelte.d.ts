import { SvelteComponentTyped } from "svelte";
import type { GridItemAlignSelf, GridItemColumn, GridItemOffset, GridItemOrder } from './GridItem.types';
declare const __propDef: {
    props: {
        [x: string]: any;
        alignSelf?: GridItemAlignSelf;
        alignSelfXs?: GridItemAlignSelf;
        alignSelfSm?: GridItemAlignSelf;
        alignSelfMd?: GridItemAlignSelf;
        alignSelfLg?: GridItemAlignSelf;
        alignSelfXl?: GridItemAlignSelf;
        alignSelfXxl?: GridItemAlignSelf;
        col?: GridItemColumn;
        xs?: GridItemColumn;
        sm?: GridItemColumn;
        md?: GridItemColumn;
        lg?: GridItemColumn;
        xl?: GridItemColumn;
        xxl?: GridItemColumn;
        offset?: GridItemOffset;
        offsetXs?: GridItemOffset;
        offsetSm?: GridItemOffset;
        offsetMd?: GridItemOffset;
        offsetLg?: GridItemOffset;
        offsetXl?: GridItemOffset;
        offsetXxl?: GridItemOffset;
        order?: GridItemOrder;
        orderXs?: GridItemOrder;
        orderSm?: GridItemOrder;
        orderMd?: GridItemOrder;
        orderLg?: GridItemOrder;
        orderXl?: GridItemOrder;
        orderXxl?: GridItemOrder;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GridItemProps = typeof __propDef.props;
export declare type GridItemEvents = typeof __propDef.events;
export declare type GridItemSlots = typeof __propDef.slots;
export default class GridItem extends SvelteComponentTyped<GridItemProps, GridItemEvents, GridItemSlots> {
}
export {};
