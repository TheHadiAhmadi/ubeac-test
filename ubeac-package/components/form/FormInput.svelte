<script>import { get_current_component } from 'svelte/internal';
import { nanoid } from 'nanoid';
import { FormGroup, Icon, Input, Label, Spinner } from '..';
import { forwardEventsBuilderNew } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * TODO
 */
export let icon = undefined;
/**
 * TODO
 */
export let id = nanoid(10);
/**
 * TODO
 */
export let label = undefined;
/**
 * TODO
 */
export let loading = false;
/**
 * TODO
 */
export let required = false;
/**
 * TODO
 */
export let value = undefined;
const forwardEvents = forwardEventsBuilderNew(get_current_component());
$: classes = classname('form-input', null, $$props.class);
</script>

{#if condition($$props)}
	<FormGroup class={classes}>
		<svelte:fragment slot="label">
			{#if label}
				<Label for={id} {required}>{label}</Label>
			{/if}
		</svelte:fragment>
		<slot name="outer:start" slot="outer:start" />
		<slot name="middle:start" slot="middle:start" />
		<svelte:fragment slot="inner:start">
			{#if icon}
				<Icon name={icon} />
			{/if}
			<slot name="inner:start" />
		</svelte:fragment>
		<Input bind:value {id} {forwardEvents} {...$$restProps} />
		<svelte:fragment slot="inner:end">
			{#if loading}
				<Spinner />
			{/if}
			<slot name="inner:end" />
		</svelte:fragment>
		<slot name="middle:end" slot="middle:end" />
		<slot name="outer:end" slot="outer:end" />
	</FormGroup>
{/if}
