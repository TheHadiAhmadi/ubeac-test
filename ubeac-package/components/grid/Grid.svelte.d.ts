import { SvelteComponentTyped } from "svelte";
import type { GridAlignContent, GridAlignItems, GridGutter, GridJustifyContent, GridReverse, GridVertical, GridWrap } from './Grid.types';
declare const __propDef: {
    props: {
        [x: string]: any;
        alignContent?: GridAlignContent;
        alignContentXs?: GridAlignContent;
        alignContentSm?: GridAlignContent;
        alignContentMd?: GridAlignContent;
        alignContentLg?: GridAlignContent;
        alignContentXl?: GridAlignContent;
        alignContentXxl?: GridAlignContent;
        alignItems?: GridAlignItems;
        alignItemsXs?: GridAlignItems;
        alignItemsSm?: GridAlignItems;
        alignItemsMd?: GridAlignItems;
        alignItemsLg?: GridAlignItems;
        alignItemsXl?: GridAlignItems;
        alignItemsXxl?: GridAlignItems;
        gutter?: GridGutter;
        gutterX?: GridGutter;
        gutterY?: GridGutter;
        justifyContent?: GridJustifyContent;
        justifyContentXs?: GridJustifyContent;
        justifyContentSm?: GridJustifyContent;
        justifyContentMd?: GridJustifyContent;
        justifyContentLg?: GridJustifyContent;
        justifyContentXl?: GridJustifyContent;
        justifyContentXxl?: GridJustifyContent;
        reverse?: GridReverse;
        vertical?: GridVertical;
        wrap?: GridWrap;
        wrapXs?: GridWrap;
        wrapSm?: GridWrap;
        wrapMd?: GridWrap;
        wrapLg?: GridWrap;
        wrapXl?: GridWrap;
        wrapXxl?: GridWrap;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GridProps = typeof __propDef.props;
export declare type GridEvents = typeof __propDef.events;
export declare type GridSlots = typeof __propDef.slots;
export default class Grid extends SvelteComponentTyped<GridProps, GridEvents, GridSlots> {
}
export {};
