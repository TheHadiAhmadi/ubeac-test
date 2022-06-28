<script>var _a;
import { Grid } from '..';
import { classname, condition } from '../../utils';
$: classes = classname('form-group', null, $$props.class);
$: col = (_a = $$props.col) !== null && _a !== void 0 ? _a : '6';
</script>

{#if condition($$props)}
	<Grid.Item {col}>
		<div class={classes}>
			<slot name="label" />
			<div class="outer">
				<slot name="outer:start" />
				<div class="middle">
					<slot name="middle:start" />
					<div class="inner">
						<slot name="inner:start" />
						<div class="input">
							<slot />
							<div class="focus" />
						</div>
						<slot name="inner:end" />
					</div>
					<slot name="middle:end" />
				</div>
				<slot name="outer:end" />
			</div>
		</div>
	</Grid.Item>
{/if}
