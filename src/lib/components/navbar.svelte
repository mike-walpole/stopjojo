<script>
  import { fade } from 'svelte/transition';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 font-haas">
  <div class="w-11/12 mx-auto flex justify-between items-center py-4">
    <!-- Logo -->
    <a href="/" class="z-50">
      <img src="/stopjojoblacklogo.webp" alt="StopJojo" class="h-6 w-auto">
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-8">
      <a href="/ksiegarnia" class="text-black hover:text-gray-600 transition-colors">Książki</a>
      <a href="/kursy" class="text-black hover:text-gray-600 transition-colors">Kursy</a>
      <a href="/przepisy" class="text-black hover:text-gray-600 transition-colors">Przepisy</a>
      <a href="/konsultacje" class="text-black hover:text-gray-600 transition-colors">Konsultacje</a>
    </div>

    <!-- Cart and Menu Icons -->
    <div class="flex items-center space-x-4">
      <!-- Cart Icon -->
      <button class="p-2" aria-label="Koszyk">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      <!-- Hamburger Menu -->
      <button 
        on:click={toggleMenu} 
        class="p-2 z-50 relative"
        aria-label="Menu"
      >
        <div class="w-6 h-0.5 bg-black transition-all duration-300 mb-1.5" style="transform: translateY({isMenuOpen ? '6px' : '0'}) rotate({isMenuOpen ? '45deg' : '0'})"></div>
        <div class="w-6 h-0.5 bg-black transition-all duration-300" style="transform: translateY({isMenuOpen ? '-6px' : '0'}) rotate({isMenuOpen ? '-45deg' : '0'})"></div>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  {#if isMenuOpen}
    <div 
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 min-h-screen bg-white/90 backdrop-blur-md z-40 flex items-center justify-center"
    >
      <div class="flex flex-col items-center justify-center min-h-screen w-full space-y-12 text-4xl">
        <a 
          href="/ksiegarnia" 
          class="text-black hover:text-gray-600 transition-colors font-bold"
          on:click={() => isMenuOpen = false}
        >
          Książki
        </a>
        <a 
          href="/kursy" 
          class="text-black hover:text-gray-600 transition-colors font-bold"
          on:click={() => isMenuOpen = false}
        >
          Kursy
        </a>
        <a 
          href="/przepisy" 
          class="text-black hover:text-gray-600 transition-colors font-bold"
          on:click={() => isMenuOpen = false}
        >
          Przepisy
        </a>
        <a 
          href="/konsultacje" 
          class="text-black hover:text-gray-600 transition-colors font-bold"
          on:click={() => isMenuOpen = false}
        >
          Konsultacje
        </a>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from hiding under fixed navbar -->
<div class="h-16"></div> 