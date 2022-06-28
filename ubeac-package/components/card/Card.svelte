<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * If you want the card to have shadow, use the elevation property
 */
export let elevation = undefined;
/**
 * If you want the card to have border, use the outline property
 */
export let outline = false;
/**
 * If you want to change the padding between card's content and card's border, use padding property.
 */
export let padding = undefined;
/**
 * Use tile property to neutralize border-radius
 */
export let tile = false;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('card', {
    elevation,
    outline,
    padding,
    tile,
}, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
