<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilderNew } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let forwardEvents = forwardEventsBuilderNew(get_current_component());
/**
 * TODO
 */
export let preview = false;
/**
 * TODO
 */
export let value = undefined;
$: classes = classname('input', { preview }, $$props.class);
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<input bind:value use:forwardEvents {...$$restProps} class={classes} />
	{/if}
{/if}
