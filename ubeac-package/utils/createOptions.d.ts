interface CreateOptions {
    items?: Array<any> | object;
    key?: string;
    text?: string;
}
export declare const createOptions: ({ items, key, text }: CreateOptions) => {
    options: import("svelte/store").Writable<any[]>;
    getId: (option: any) => any;
    getKey: (option: any) => any;
    getText: (option: any) => any;
    getValue: (input: any) => any;
    isSelected: (option: any, value: any) => boolean;
    toId: (value: any) => any;
};
export {};
