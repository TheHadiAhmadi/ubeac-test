<script>import { get_current_component } from 'svelte/internal';
import { forwardEventsBuilder } from '../../directives';
import { classname, condition } from '../../utils';
/**
 * Aligns contents vertically across all rows (It overrides alignItems).
 */
export let alignContent = undefined;
/**
 * Aligns contents vertically across all rows for extra-small display sizes
 * (It overrides alignItemsXs).
 */
export let alignContentXs = undefined;
/**
 * Aligns contents vertically across all rows for small display sizes
 * (It overrides alignItemsSm).
 */
export let alignContentSm = undefined;
/**
 * Aligns contents vertically across all rows for medium display sizes
 * (It overrides alignItemsMd).
 */
export let alignContentMd = undefined;
/**
 * Aligns contents vertically across all rows for large display sizes
 * (It overrides alignItemsLg).
 */
export let alignContentLg = undefined;
/**
 * Aligns contents vertically across all rows for extra-large display sizes
 * (It overrides alignItemsXl).
 */
export let alignContentXl = undefined;
/**
 * Aligns contents vertically across all rows for extra-extra-large display sizes
 * (It overrides alignItemsXXl).
 */
export let alignContentXxl = undefined;
/**
 * Aligns contents vertically inside their own row.
 */
export let alignItems = undefined;
/**
 * Aligns contents vertically inside their own row for extra-small display sizes.
 */
export let alignItemsXs = undefined;
/**
 * Aligns contents vertically inside their own row for small display sizes.
 */
export let alignItemsSm = undefined;
/**
 * Aligns contents vertically inside their own row for medium display sizes.
 */
export let alignItemsMd = undefined;
/**
 * Aligns contents vertically inside their own row for large display sizes.
 */
export let alignItemsLg = undefined;
/**
 * Aligns contents vertically inside their own row for extra-large display sizes.
 */
export let alignItemsXl = undefined;
/**
 * Aligns contents vertically inside their own row for extra-extra-large display sizes.
 */
export let alignItemsXxl = undefined;
/**
 * Adds a gap between contents to make space between them vertically and horizontally.
 */
export let gutter = undefined;
/**
 * Adds a gap between contents to make space between them horizontally.
 */
export let gutterX = undefined;
/**
 * Adds a gap between contents to make space between them vertically.
 */
export let gutterY = undefined;
/**
 * Justifies contents horizontally.
 */
export let justifyContent = undefined;
/**
 * Justifies contents horizontally for extra-small display sizes.
 */
export let justifyContentXs = undefined;
/**
 * Justifies contents horizontally for small display sizes.
 */
export let justifyContentSm = undefined;
/**
 * Justifies contents horizontally for medium display sizes.
 */
export let justifyContentMd = undefined;
/**
 * Justifies contents horizontally for large display sizes.
 */
export let justifyContentLg = undefined;
/**
 * Justifies contents horizontally for extra-large display sizes.
 */
export let justifyContentXl = undefined;
/**
 * Justifies contents horizontally for extra-extra-large display sizes.
 */
export let justifyContentXxl = undefined;
/**
 * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
 */
export let reverse = undefined;
/**
 * Changes the flow of contents from left-to-right to top-to-down.
 */
export let vertical = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width.
 */
export let wrap = true;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for extra-small screen devices.
 */
export let wrapXs = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for small screen devices.
 */
export let wrapSm = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for medium screen devices.
 */
export let wrapMd = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for large screen devices.
 */
export let wrapLg = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for extra-large screen devices.
 */
export let wrapXl = undefined;
/**
 * Controls allowing the container to wrap the content or not if the cumulative width
 * size of contents is more than the twelve-column width for extra-extra-large screen devices.
 */
export let wrapXxl = undefined;
const forwardEvents = forwardEventsBuilder(get_current_component());
$: classes = classname('grid', {
    alignContent,
    alignContentXs,
    alignContentSm,
    alignContentMd,
    alignContentLg,
    alignContentXl,
    alignContentXxl,
    alignItems,
    alignItemsXs,
    alignItemsSm,
    alignItemsMd,
    alignItemsLg,
    alignItemsXl,
    alignItemsXxl,
    gutter,
    gutterX,
    gutterY,
    justifyContent,
    justifyContentXs,
    justifyContentSm,
    justifyContentMd,
    justifyContentLg,
    justifyContentXl,
    justifyContentXxl,
    reverse,
    vertical,
    wrap,
    wrapXs,
    wrapSm,
    wrapMd,
    wrapLg,
    wrapXl,
    wrapXxl,
}, $$props.class, true);
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div>
			<slot />
		</div>
	</div>
{/if}
