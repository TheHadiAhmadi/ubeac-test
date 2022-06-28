<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Set color of Badge
 */
export let color = undefined;
/**
 * Show badge as small dot
 */
export let dot = false;
/**
 * reduce background color's opacity
 */
export let ghost = false;
/**
 * Set a redirect url for badge
 */
export let href = undefined;
/**
 * Draws Outlined Badge
 */
export let outline = false;
/**
 * You can change shape of badge using round property
 */
export let shape = undefined;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('badge', {
    color,
    dot,
    ghost,
    href,
    outline,
    shape,
}, $$props.class);
</script>

{#if condition($$props)}
	<svelte:element this={href ? 'a' : 'span'} {href} use:forwardEvents {...$$restProps} class={classes}>
		{#if !dot}
			<slot />
		{/if}
	</svelte:element>
{/if}
