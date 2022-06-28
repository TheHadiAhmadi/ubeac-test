<script>import { get_current_component } from 'svelte/internal';
import { nanoid } from 'nanoid';
import { Label } from '..';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let id = nanoid(10);
/**
 * TODO
 */
export let label = undefined;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('form-fieldset', null, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		{#if label}
			<Label for={id}>{label}</Label>
		{/if}
		<fieldset>
			<slot />
		</fieldset>
	</div>
{/if}
