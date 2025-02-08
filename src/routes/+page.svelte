<script>
	import { fade } from 'svelte/transition';
	let email = '';
	let isSubmitting = false;
	let showSuccess = false;
  
	async function handleSubmit() {
	  isSubmitting = true;
	  try {
		// Add your email submission logic here
		await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
		showSuccess = true;
		email = '';
	  } catch (error) {
		console.error('Error:', error);
	  } finally {
		isSubmitting = false;
	  }
	}
  </script>
  
  <svelte:head>
    <title>StopJojo - Profesjonalne Wsparcie w Drodze do Zdrowia</title>
    <meta property="og:image" content="/hero-lg.avif" />
    <meta property="og:title" content="StopJojo - Profesjonalne Wsparcie w Drodze do Zdrowia" />
    <meta property="og:description" content="Odkryj Nową Siebie: Profesjonalne Wsparcie w Drodze do Zdrowia i Dobrego Samopoczucia" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://stopjojo.pl" />
    <meta property="og:site_name" content="StopJojo" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/hero-lg.avif" />
    <meta name="twitter:title" content="StopJojo - Profesjonalne Wsparcie w Drodze do Zdrowia" />
    <meta name="twitter:description" content="Odkryj Nową Siebie: Profesjonalne Wsparcie w Drodze do Zdrowia i Dobrego Samopoczucia" />
    
    <meta name="description" content="Odkryj Nową Siebie: Profesjonalne Wsparcie w Drodze do Zdrowia i Dobrego Samopoczucia" />
  </svelte:head>
  
  <div class="min-h-screen font-haas flex flex-col relative bg-[#fffdf5]">
	<!-- Gradient Background -->
	
	
	<!-- Content -->
	<div class="relative w-11/12 max-w-4xl mx-auto py-24 flex-grow flex flex-col">
	  <!-- Logo -->
	  <div class="mb-16 mx-auto">
		<img src="/stopjojoblacklogo.webp" alt="StopJojo" class="h-8 w-auto">
	  </div>
  
	  <!-- Main Content -->
	  <div class="flex-grow flex flex-col justify-center items-center text-center space-y-12">
		<h1 class="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#585d33] to-[#dbd6b5] bg-clip-text text-transparent">
		  Już wkrótce
		</h1>
		
		<div class="space-y-6 max-w-2xl backdrop-blur-sm">
		  <p class="text-xl md:text-2xl text-gray-900">
			Przygotowujemy dla Ciebie kompleksową platformę, która pomoże Ci osiągnąć Twoje cele zdrowotne:
		  </p>
		  
		  <ul class="text-lg md:text-xl text-gray-900 space-y-4">
			<li class="flex items-center justify-center space-x-2">
			  <span class="text-black">•</span>
			  <span>Książki i poradniki oparte na najnowszych badaniach naukowych</span>
			</li>
			<li class="flex items-center justify-center space-x-2">
			  <span class="text-black">•</span>
			  <span>Spersonalizowane plany dietetyczne dostosowane do Twoich potrzeb</span>
			</li>
			<li class="flex items-center justify-center space-x-2">
			  <span class="text-black">•</span>
			  <span>Interaktywne kursy online z wsparciem ekspertów</span>
			</li>
		  </ul>
		</div>
  
		<!-- Email Signup -->
		<div class="w-full max-w-md space-y-4">
		  <p class="text-gray-900">
			Zapisz się, aby otrzymać powiadomienie o starcie platformy i ekskluzywny dostęp do przedsprzedaży.
		  </p>
		  
		  {#if !showSuccess}
			<form 
			  on:submit|preventDefault={handleSubmit}
			  class="flex flex-col sm:flex-row gap-4"
			>
			  <input
				type="email"
				bind:value={email}
				placeholder="Twój adres email"
				required
				class="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white/80 backdrop-blur-sm"
			  />
			  <button
				type="submit"
				disabled={isSubmitting}
				class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 whitespace-nowrap shadow-lg hover:shadow-xl"
			  >
				{isSubmitting ? 'Wysyłanie...' : 'Powiadom mnie'}
			  </button>
			</form>
		  {:else}
			<p class="text-green-600 font-medium" in:fade>
			  Dziękujemy! Będziemy w kontakcie.
			</p>
		  {/if}
		</div>
	  </div>
	</div>
  
	<!-- Footer -->
	<footer class="relative w-11/12 max-w-4xl mx-auto py-8 border-t border-gray-200">
	  <p class="text-center text-gray-500 text-sm">
		© {new Date().getFullYear()} StopJojo. Wszystkie prawa zastrzeżone.
	  </p>
	</footer>
  </div>
  