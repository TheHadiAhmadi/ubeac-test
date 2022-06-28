<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Set text position
 */
export let placement = 'center';
/**
 * Set style of the divider line
 */
export let type = 'solid';
/**
 * Set Divider variant
 */
export let variant = 'full';
/**
 * Split views vertically
 */
export let vertical = false;
/**
 * Thickness of divider line
 */
export let width = 'thin';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('divider', {
    empty: !$$slots['default'],
    horizontal: !vertical,
    placement,
    type,
    variant,
    vertical,
    width,
}, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
