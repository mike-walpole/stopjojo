<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer.svelte';
	import Timeline from '$lib/components/timeline.svelte';
    import Stats from '$lib/components/stats.svelte';
    import FAQ from '$lib/components/faq.svelte';
	import ThreeArticles from '$lib/components/threearticles.svelte';
	import Services from '$lib/components/services.svelte';
	import BMICalculator from '$lib/components/bmi-calculator.svelte';
  

	import Images from '$lib/components/images.svelte';

	import Testimonials from '$lib/components/testimonials.svelte';
	let isMenuOpen = false;
	let isMobile = false;
	let parallaxContainer;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);

		// Parallax effect
		const handleScroll = () => {
			if (parallaxContainer) {
				const scrollPosition = window.pageYOffset;
				parallaxContainer.style.transform = `translateY(${scrollPosition * 0.5}px)`;
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', checkMobile);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<svelte:head>
  <title>StopJojo - Profesjonalne Wsparcie w Drodze do Zdrowia</title>
  <meta property="og:image" content="/a1.webp" />
  <meta property="og:title" content="StopJojo - Profesjonalne Wsparcie w Drodze do Zdrowia" />
  <meta property="og:description" content="Odkryj Nową Siebie: Profesjonalne Wsparcie w Drodze do Zdrowia i Dobrego Samopoczucia" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="relative overflow-hidden">
	<!-- Hero image with darkening overlay -->
	<div class="relative w-full h-screen">
		<div bind:this={parallaxContainer} class="absolute inset-0" style="transform: translateY(0);">
			<img src="/hero-lg.avif" alt="Hero" class="w-full h-full object-cover" />
		</div>
		<div class="absolute inset-0 bg-black opacity-20"></div>
	</div>

	<!-- Navbar -->
	<nav
		class="absolute top-0 left-0 right-0 p-4 flex items-center justify-between border-b border-white/30"
	>
		<img src="/stopjojowhitelogo.webp" alt="Firs Logo" class="h-6" />

		{#if isMobile}
			<button on:click={toggleMenu} class="z-50 relative w-8 h-8">
				<div
					class="absolute w-8 h-0.5 bg-white transition-all duration-300"
					class:rotate-45={isMenuOpen}
					class:translate-y-2={!isMenuOpen}
				></div>
				<div
					class="absolute w-8 h-0.5 bg-white transition-all duration-300"
					class:-rotate-45={isMenuOpen}
					class:-translate-y-2={!isMenuOpen}
				></div>
			</button>
		{:else}
			<div class="flex-grow flex justify-center py-2">
				<div class="flex space-x-8">
					<div class="relative">
						<span class="absolute -left-4 text-gray-300 text-sm font-haas font-bold">01</span>
						<a href="#studio" class="text-white hover:text-gray-300 text-2xl pl-1">Studio</a>
					</div>
					<div class="relative">
						<span class="absolute -left-4 text-gray-300 text-sm font-haas font-bold">02</span>
						<a href="#work" class="text-white hover:text-gray-300 text-2xl pl-1">Kursy</a>
					</div>
					<div class="relative">
						<span class="absolute -left-4 text-gray-300 text-sm font-haas font-bold">03</span>
						<a href="#contact" class="text-white hover:text-gray-300 text-2xl pl-1">Kontakt</a>
					</div>
					<div class="relative">
						<span class="absolute -left-4 text-gray-300 text-sm font-haas font-bold">04</span>
						<a href="/ksiegarnia" class="text-white hover:text-gray-300 text-2xl pl-1">Księgarnia</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Mobile Menu -->
	{#if isMobile}
		<div
			class="fixed inset-0 backdrop-blur-md bg-black/30 z-40 transition-opacity duration-300"
			class:opacity-0={!isMenuOpen}
			class:invisible={!isMenuOpen}
		>
			<div class="font-haas flex flex-col justify-center h-full space-y-8 px-8">
				<div class="relative">
					<span class="absolute font-haas font-bold -left-4 text-gray-400">01</span>
					<a href="#studio" class="text-white text-6xl pl-2" on:click={toggleMenu}>Studio</a>
				</div>
				<div class="relative">
					<span class="absolute font-haas font-bold -left-4 text-gray-400 mr-2">02</span>
					<a href="#work" class="text-white text-6xl pl-2" on:click={toggleMenu}>Kursy</a>
				</div>
					<div class="relative">
						<span class="absolute font-haas font-bold -left-4 text-gray-400">03</span>
						<a href="#contact" class="text-white text-6xl pl-2" on:click={toggleMenu}>Kontakt</a>
					</div>
					<div class="relative">
						<span class="absolute font-haas font-bold -left-4 text-gray-400">04</span>
						<a href="/ksiegarnia" class="text-white text-6xl pl-2" on:click={toggleMenu}>Księgarnia</a>
					</div>
				<a
					href="mailto:michal@web24.studio"
					class="bg-transparent border border-white text-white px-6 py-3 font-haas text-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center mt-8"
				>
					Porozmawiajmy
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 ml-2 transform -rotate-45"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	{/if}

	<!-- Logo overlay and additional text -->
	<div
		class="absolute inset-x-0 bottom-0 flex flex-col md:flex-row items-end md:items-center justify-between px-4 pb-24"
	>
		<div
			class="text-white text-2xl font-bold leading-tight md:text-5xl mb-4 md:mb-0 order-1 md:order-1 md:pr-6"
		>
			Odkryj Nową Siebie: Profesjonalne Wsparcie w Drodze do Zdrowia i Dobrego Samopoczucia
		</div>
		<img src="/stopjojowhitelogo.webp" alt="Logo" class="w-full md:w-1/2 order-1 md:order-2" />
	</div>
</div>
<div class="border-b w-11/12 pt-24 mx-auto"></div>

<div class="font-haas w-11/12 mx-auto">
	<p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Witaj w świecie zdrowych zmian</p>
	<h2 class="text-3xl md:text-5xl md:font-bold leading-tight md:w-3/5">
		Zasługujesz na to, by czuć się wspaniale w swoim ciele. Nasza platforma łączy wiedzę ekspertów, 
		sprawdzone metody i indywidualne podejście, by pomóc Ci osiągnąć trwałe efekty bez wyrzeczeń i restrykcyjnych diet.
	</h2>
</div>

<div class="px-5 max-w-4xl mx-auto mt-24 grid grid-cols-1">
	<h2 class="mb-10 text-3xl">Kompleksowe Wsparcie</h2>
	<div>
		<p class="mb-2 text-xl">Eksperci z pasją</p>
		<p class="text-gray-500">
			Nasz zespół doświadczonych dietetyków i psychologów żywienia pomoże Ci zrozumieć Twoje nawyki 
			żywieniowe i stworzyć zdrową relację z jedzeniem. Oferujemy konsultacje online, które dopasują 
			się do Twojego napiętego grafiku.
		</p>
	</div>
</div>

<div class="px-5 max-w-4xl mx-auto mt-24 grid grid-cols-1">
	<h2 class="mb-10 text-3xl">Trwałe Rezultaty</h2>
	<div>
		<p class="mb-2 text-xl">Zmiana na lepsze</p>
		<p class="text-gray-500">
			Nasze metody opierają się na najnowszych badaniach naukowych i wieloletnim doświadczeniu. 
			Nie oferujemy cudownych diet, lecz sprawdzone sposoby na wprowadzenie trwałych, zdrowych 
			nawyków, które będą służyć Ci przez lata.
		</p>
	</div>
</div>

<Testimonials />
<ThreeArticles />
<Services />
<BMICalculator />
<Stats />
<Timeline />
<FAQ />

<Footer />



<style>
	.relative.overflow-hidden {
		will-change: transform;
	}
</style>
