<script>import { get_current_component } from 'svelte/internal';
import { Checkbox } from '..';
import { forwardEventsBuilderNew } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let description = undefined;
/**
 * TODO
 */
export let inline = false;
/**
 * TODO
 */
export let label = undefined;
const forwardEvents = forwardEventsBuilderNew(get_current_component());
$: classes = classname('form-checkbox', { inline }, $$props.class);
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class={classes}>
		<Checkbox {forwardEvents} />
		{#if label}
			<span class="form-checkbox-label">{label}</span>
		{/if}
		{#if description}
			<span class="form-checkbox-description">
				{description}
			</span>
		{/if}
	</label>
{/if}
