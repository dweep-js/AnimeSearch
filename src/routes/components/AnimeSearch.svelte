<script>
	export let imageUrl;
	let results = [];
	let currentIndex = 0;
	let errorMessage = '';
	let videoUrl = '';
	let animeName = '';
	let isPlayerVisible = false;
	let sceneTimes = '';

	async function fetchAnimeTitles() {
		if (!imageUrl) {
			errorMessage = 'Please enter an image URL.';
			resetResults();
			return;
		}

		errorMessage = '';
		try {
			const response = await fetch(
				'https://api.trace.moe/search?url=' + encodeURIComponent(imageUrl)
			);
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

			const data = await response.json();

			if (data && data.result && data.result.length > 0) {
				results = data.result;
				currentIndex = 0;
				updateCurrentResult();
			} else {
				resetResults();
				errorMessage = 'No results found.';
			}
		} catch (error) {
			resetResults();
			errorMessage = 'Error fetching data: ' + error.message;
		}
	}

	function updateCurrentResult() {
		if (results.length > 0) {
			const item = results[currentIndex];
			videoUrl = item.video;
			fetchAnimeName(item.anilist);
			sceneTimes = `${(item.from / 60).toFixed(2)} - ${(item.to / 60).toFixed(2)} mins`;
			isPlayerVisible = false;
		}
	}

	async function fetchAnimeName(animeId) {
		try {
			const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
			if (response.ok) {
				const data = await response.json();
				animeName = data.data.title;
			} else {
				animeName = 'Unknown Anime';
			}
		} catch {
			animeName = 'Unknown Anime';
		}
	}

	function resetResults() {
		results = [];
		currentIndex = 0;
		videoUrl = '';
		animeName = '';
		errorMessage = '';
		isPlayerVisible = false;
		sceneTimes = '';
	}

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				imageUrl = reader.result; // Display the image address
				fetchAnimeTitles(); // Fetch anime titles after setting the image URL
			};
			reader.readAsDataURL(file);
		}
	}

	function nextResult() {
		if (results.length > 0) {
			currentIndex = (currentIndex + 1) % results.length;
			updateCurrentResult();
		}
	}

	function playVideo() {
		isPlayerVisible = true;
	}
</script>

<div class="container">
	<h1 class="fade-in">Anime Scene Search</h1>
	<div class="input-container fade-in">
		<label class="file-input-label">
			<input type="file" accept="image/*" on:change={handleFileUpload} />
			🗃️
		</label>
		<input type="text" placeholder="Enter image URL" bind:value={imageUrl} class="url-input" />
		<button class="search-button" on:click={fetchAnimeTitles}>🔍</button>
	</div>

	{#if errorMessage}
		<p class="error">{errorMessage}</p>
	{/if}

	{#if results.length > 0}
		<h2 class="result-heading fade-in">Result:</h2>
		<div class="result fade-in">
			<strong>Anime Name:</strong>
			<a
				href={`https://myanimelist.net/anime/${results[currentIndex]?.anilist}`}
				target="_blank"
				rel="noopener noreferrer"
				class="anime-link"
			>
				{animeName}
			</a> <br />
			<strong>Episode:</strong>
			{results[currentIndex]?.episode || 'N/A'} <br />
			<strong>Scene Time:</strong>
			{sceneTimes} mins <br />
			<button class="play-button" on:click={playVideo}>Play Video</button>
			{#if isPlayerVisible}
				<h3 class="player-heading">Video Player:</h3>
				<video controls width="100%" class="video-player">
					<source src={videoUrl} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			{/if}
			<button class="next-button" on:click={nextResult}>➡️</button>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 100%; /* Full width for mobile friendliness */
		margin: auto;
		padding: 2em;
		text-align: center;
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.8); /* Dark semi-transparent background */
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
		animation: slideIn 0.5s ease; /* Animation on load */
	}

	@keyframes slideIn {
		from {
			transform: translateY(-20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	h1,
	h2 {
		color: #00f5f5; /* Bright teal for contrast */
		animation: fadeIn 0.5s ease-in-out;
	}

	.input-container {
		display: flex;
		flex-direction: column; /* Stack vertically on mobile */
		margin-bottom: 20px;
		animation: fadeIn 0.5s ease-in-out;
	}

	.file-input-label {
		display: flex;
		align-items: center;
		cursor: pointer;
		margin-bottom: 10px;
		font-size: 20px; /* Reduced font size for mobile */
	}

	input[type='file'] {
		display: none;
	}

	.url-input {
		padding: 12px;
		border: 2px solid #00c8f5; /* Bright teal border */
		border-radius: 6px;
		margin-bottom: 10px; /* Spacing between elements */
		transition: border-color 0.3s;
	}

	.url-input:focus {
		border-color: #008bd1; /* Focus color */
		outline: none;
	}

	.search-button {
		padding: 12px 20px;
		border: none;
		border-radius: 6px;
		background-color: #00c8f5; /* Bright button color */
		color: white;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.search-button:hover {
		background-color: #00f5f5; /* Lighter hover color */
	}

	.play-button,
	.next-button {
		margin-top: 20px;
		padding: 10px 15px;
		border: none;
		border-radius: 6px;
		background-color: #00f5f5; /* Bright button color */
		color: white;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.play-button:hover,
	.next-button:hover {
		background-color: #00c8f5; /* Lighter hover color */
	}

	.error {
		color: red;
	}

	.result {
		margin-top: 20px;
		text-align: left;
		background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
		padding: 1em;
		border-radius: 6px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		animation: fadeIn 0.5s ease-in-out;
	}

	.result-heading {
		color: #fff; /* White for contrast */
	}

	.anime-link {
		color: #00f5f5; /* Bright teal link color */
		text-decoration: none;
	}

	.anime-link:hover {
		text-decoration: underline;
	}

	.player-heading {
		margin-top: 20px;
		color: #fff; /* White for contrast */
	}

	.video-player {
		border-radius: 8px;
		margin-top: 10px;
	}
</style>
