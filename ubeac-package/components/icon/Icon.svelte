<script>import { get_current_component } from 'svelte/internal';
import Icon from '@iconify/svelte';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Set color of the Icon
 */
export let color = undefined;
/**
 * Name of the Icon, see https://icon-sets.iconify.design/ for list of icon names and packs
 */
export let name = undefined;
/**
 * Change Icons package, see https://icon-sets.iconify.design/ for list of icon packs
 */
export let pack = 'tabler';
/**
 * Set Size of the Icon
 */
export let size = 'auto';
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('icon', {
    color,
    size,
}, $$props.class);
</script>

{#if condition($$props)}
	<Icon icon="{pack}:{name}" width="auto" height="auto" {...$$restProps} class={classes} />
{/if}
