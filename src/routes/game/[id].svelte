<script context="module">
    export async function load({ params }) {
        const id = params.id

        return {
            props: { id }
        }
    }
</script>

<script>
    export let id
	let secret
	const games = [
		'Battlefield 3',
		'Bulletstorm',
		'Crysis',
		'Cyberpank 2077',
		'Fallout 3',
		'Portal',
		'FarCry 3',
		'GTA V',
		'Skyrim'
	]


	function checkSecret() {
		if( games[id] == 'Portal' && secret == 'cake' ) {
			window.location.href = '../complete'
		}
	}

</script>

<svelte:head>
	<title>{ games[id] }</title>
</svelte:head>

<section>
	<h1>
		{ games[id] }
	</h1>

    <div class = 'game-overview'>
		<li class = 'card'>
			<img src="/img/games/{games[id]}.png" alt="{games[id]}">
			<p>{ games[id] }</p>
		</li>
	
		<form action="" class = 'short'>
			<input id = 'secret-word' bind:value={ secret } type="text" placeholder = "секретное слово ..." autocomplete="off">
			<button on:click|preventDefault={ checkSecret } id = 'enter'>ввести</button>
		</form>
	</div>

	
</section>

