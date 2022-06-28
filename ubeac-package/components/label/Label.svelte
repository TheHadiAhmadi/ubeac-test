<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let required = false;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('label', { required }, $$props.class);
</script>

{#if condition($$props)}
	<label use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</label>
{/if}
