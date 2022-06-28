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
export let value = undefined;
$: classes = classname('checkbox', null, $$props.class);
</script>

{#if condition($$props)}
	<input bind:checked={value} use:forwardEvents {...$$restProps} class={classes} type="checkbox" />
{/if}
