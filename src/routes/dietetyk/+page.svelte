<!-- Cal inline embed code begins -->

<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import Footer from '$lib/components/Footer.svelte';
  let isMenuOpen = false;
	let isMobile = false;
	let parallaxContainer;
    function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
  

  onMount(() => {
    if (browser) {
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "30min", {origin:"https://cal.com"});

      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {
          "layout":"month_view",
          "timeFormat": "24h",
          "language": "pl"
        },
        calLink: "nowastrona/30min",
      });

      Cal.ns["30min"]("ui", {
        "styles":{"branding":{"brandColor":"#000000"}},
        "hideEventTypeDetails":false,
        "layout":"month_view",
        "timeFormat": "24h",
        "language": "pl"
      });
    };
    const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);

		// Parallax effect
		const handleScroll = () => {
			if (parallaxContainer) {
				const scrollPosition = window.pageYOffset;
				const parallaxSpeed = 0.5;
				const maxParallax = window.innerHeight / 2; // Limit parallax to half the viewport height
				const parallaxOffset = Math.min(scrollPosition * parallaxSpeed, maxParallax);
				parallaxContainer.style.transform = `translateY(${parallaxOffset}px)`;
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', checkMobile);
			window.removeEventListener('scroll', handleScroll);
		};
  });
</script>
<!-- Cal inline embed code ends -->
<div class="relative overflow-hidden">
	<!-- Hero image with darkening overlay -->
	<div class="relative w-full h-[50vh]">
		<div bind:this={parallaxContainer} class="absolute inset-0 h-[100vh]" style="transform: translateY(0);">
			<img src="/hero.webp" alt="Hero" class="w-full h-full object-cover" />
		</div>
		<div class="absolute inset-0 bg-black opacity-40"></div> <!-- Increased opacity for better text visibility -->
		
		<!-- Centered H1 -->
		<div class="absolute inset-0 flex items-center justify-center">
			<h1 class="text-white text-4xl md:text-6xl font-bold text-center px-4">
				Twoja droga do zdrowia zaczyna się tutaj. <br> <span class="">Zarezerwuj e-wizytę już dziś!</span>
			</h1>
		</div>
	</div>

	<!-- Navbar -->
	<nav
		class="absolute top-0 left-0 right-0 p-4 flex items-center justify-between border-b border-white/30"
	>
		<img src="/stopjojowhitelogo.webp" alt="StopJojo Logo" class="h-6" />

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
						<a href="#contact" class="text-white hover:text-gray-300 text-2xl pl-1">Dietetyk</a>
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
			<div class="font-haas flex flex-col justify-center  space-y-8 px-8">
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
					<a href="#contact" class="text-white text-6xl pl-2" on:click={toggleMenu}>Dietetyk</a>
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
	
</div>
<div class="border-b w-11/12 pt-24 mx-auto max-w-[1000px]"></div>

<div class="font-haas w-11/12 mx-auto max-w-[1000px]">
	<p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Witaj w świecie zdrowych zmian!</p>
	<h2 class="text-3xl md:text-5xl md:font-bold leading-tight mb-8">
		Gotowy na rewolucję w swoim życiu? Nasi eksperci dietetycy czekają, by pomóc Ci osiągnąć Twoje cele!
	</h2>
	<p class="text-xl md:text-2xl mb-8">
		Umów się na e-wizytę już dziś i zrób pierwszy krok w kierunku lepszego samopoczucia, więcej energii i sylwetki marzeń. Nie czekaj - Twoje zdrowie nie może się doczekać!
	</p>
	<ul class="list-disc list-inside text-lg md:text-xl mb-8">
		<li>Spersonalizowane plany żywieniowe dostosowane do Twoich potrzeb</li>
		<li>Profesjonalne wsparcie i motywacja na każdym etapie Twojej podróży</li>
		<li>Elastyczne terminy konsultacji dopasowane do Twojego harmonogramu</li>
		<li>Gwarancja satysfakcji i widocznych efektów</li>
	</ul>
	<p class="text-2xl md:text-3xl font-bold mb-12">
		Nie odkładaj na jutro tego, co możesz zrobić dla swojego zdrowia już dziś. Zarezerwuj swoją e-wizytę poniżej!
	</p>
</div>

<div class="w-11/12 mx-auto max-w-[1200px]">
	<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
</div>

<Footer />