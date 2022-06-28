<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Moves items closer to each other
 */
export let stacked = false;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('avatar-group', {
    stacked,
}, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
