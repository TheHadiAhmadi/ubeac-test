<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Set color of Avatar
 */
export let color = undefined;
/**
 * Set shape of Avatar
 */
export let shape = 'round';
/**
 * Set size of Avatar
 */
export let size = 'md';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('avatar', {
    color,
    shape,
    size,
}, $$props.class);
</script>

{#if condition($$props)}
	<span use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</span>
{/if}
