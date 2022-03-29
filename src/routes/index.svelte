
<script>
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
</script>

<svelte:head>
	<title>Games</title>
</svelte:head>

<section>
	<h1>
		Выберите игру
	</h1>

	<ul class = 'card-list'>
		{#each games as game, i}
			<a href = '/game/{i}'>
				<li class = 'card'>
					<img src="/img/games/{game}.png" alt="{game}">
					<p>{ game }</p>
				</li>
			</a>
		{/each}
	</ul>
	
</section>

