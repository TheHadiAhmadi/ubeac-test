<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Size of buttons
 */
export let size = 'md';
/**
 * Align Buttons vertically
 */
export let vertical = false;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('button-group', {
    horizontal: !vertical,
    size,
    vertical,
}, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
