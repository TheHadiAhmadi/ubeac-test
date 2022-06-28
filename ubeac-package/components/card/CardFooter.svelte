<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * If you want to set Card footer's color same as card's body, use the transparent property
 */
export let transparent = false;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('card-footer', { transparent }, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
