<script>
	import { Grid, Card, Button, FormInput, Label, Input } from '@ubeac/svelte';
import FormGroup from '@ubeac/svelte/components/form/FormGroup.svelte';
	import '@ubeac/svelte/styles.css';

	let user = {};
</script>

<div class="TODOpage">
<Grid alignItems="center" justifyContent="center">
	<Grid.Item class="p-2 container-tight">
		<Card outline>
			<Card.Body>

            <Card.Body>
                <Grid alignItems="center" justifyContent=center>
                    <Grid.Item>
                        <img src="https://flightui.tripsupport.com/assets/logo-light.cb82ec4f.png"/>
                    </Grid.Item>
                </Grid>
            </Card.Body>


            <FormGroup col=12>
                <Label slot="label">Username</Label>
                <Input placeholder="Enter your username..." />
            </FormGroup>

            <FormGroup class="mt-3" col=12>
                <Label slot="label">Password</Label>
                <Input type="password" placeholder="Enter your password..." />
            </FormGroup>
				
			</Card.Body>
			<Card.Footer>
                <Grid class="w-100" justifyContent=end gutterX="sm">
                    <Grid.Item>
                        <Button>Forgot Password?</Button>
                    </Grid.Item>
                    <Grid.Item>
                        <Button color="primary">Login</Button>
                    </Grid.Item>
                </Grid>
			</Card.Footer>
		</Card>
        <p class="mt-3 text-center text-muted">Don't have account yet? <a>Sign up now!</a></p>
	</Grid.Item>
</Grid>

</div>

<style>
    .TODOpage {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content : center;
    }

    :global(.container-tight) {
        max-width: 30rem !important;
    }

    :global(.TODOgap-2 > div) {
        gap: 0.5rem;
    }
</style>