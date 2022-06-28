<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * You can use color property to change status's border color
 */
export let color = undefined;
/**
 * You can set position of status using placement property
 */
export let placement = undefined;
/**
 * If you want to change size of Status, use size property
 */
export let size = 'md';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('card-status', {
    color,
    placement,
    size,
}, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
