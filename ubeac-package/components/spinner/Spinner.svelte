<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let color = undefined;
/**
 * TODO
 */
export let size = 'sm';
/**
 * TODO
 */
export let style = 'border';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('spinner', {
    color,
    size,
    style,
}, $$props.class);
</script>

{#if condition($$props)}
	<div role="status" use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
