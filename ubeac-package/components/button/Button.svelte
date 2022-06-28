<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Make the button fit to its parent width
 */
export let block = false;
/**
 * Set color of button
 */
export let color = undefined;
/**
 * Set disabled state of button
 */
export let disabled = false;
/**
 * TODO
 */
export let elevation = 0;
/**
 * Only show text of button with trasnparent background and border
 */
export let ghost = false;
/**
 * Set redirect url for link button
 */
export let href = undefined;
/**
 * Show loading spinner inside button
 */
export let loading = false;
/**
 * Draws outlined Buttons with transparent background
 */
export let outline = false;
/**
 * Shape of button
 */
export let shape = undefined;
/**
 * Set the size of button
 */
export let size = 'md';
const forwardEvents = forwardEventsBuilder(get_current_component());
let ref;
$: icon = ref && (!ref.textContent || !ref.textContent.trim());
$: classes = classname('button', {
    block,
    [color]: !!color,
    disabled,
    elevation,
    ghost,
    icon,
    loading,
    outline,
    shape,
    size,
}, $$props.class);
</script>

{#if condition($$props)}
	<svelte:element
		this={href ? 'a' : 'button'}
		{href}
		bind:this={ref}
		use:forwardEvents
		{...$$restProps}
		class={classes}>
		<slot />
	</svelte:element>
{/if}
