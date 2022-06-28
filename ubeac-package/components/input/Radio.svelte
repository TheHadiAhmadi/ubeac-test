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
export let group = undefined;
/**
 * TODO
 */
export let value = undefined;
$: classes = classname('radio', null, $$props.class);
</script>

{#if condition($$props)}
	<input bind:group {value} use:forwardEvents {...$$restProps} class={classes} type="radio" />
{/if}
