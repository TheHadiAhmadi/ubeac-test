<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * You can change border radius of Media using placement property
 */
export let placement = 'middle';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('card-media', { placement }, $$props.class);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
