import type { SvelteComponent } from 'svelte';
export declare const forwardEventsBuilder: (component: SvelteComponent) => (node: HTMLElement | SVGElement) => {
    destroy: () => void;
};
export declare const forwardEventsBuilderNew: (component: SvelteComponent) => (node: HTMLElement | SVGElement) => {
    destroy: () => void;
};
