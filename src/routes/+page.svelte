<script>
	import AnimeFinder from './components/AnimeSearch.svelte';

	let imageUrl = '';
</script>

<main>
	<AnimeFinder {imageUrl} />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh; /* Full height for body */
		background: linear-gradient(to right, #001f4d, #004e7a); /* Gradient background */
	}

	main {
		text-align: center;
		padding: 2em;
		max-width: 600px; /* Adjusted for mobile friendliness */
		margin: auto;
		font-family: 'Poppins', sans-serif;
		color: white;
		background: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background for main content */
		border-radius: 20px; /* Curvy edges */
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
		animation: fadeIn 0.5s ease-in-out; /* Animation on load */
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	h1 {
		color: #00f5f5; /* Bright teal for contrast */
		margin-bottom: 1em; /* Spacing below the header */
	}

	p {
		color: #00c8f5; /* Lighter text color */
	}
</style>
