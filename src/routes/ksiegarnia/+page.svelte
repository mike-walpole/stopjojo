<script>
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';

  const books = {
    bestsellers: [
      {
        id: 1,
        title: "Stop Jojo: Podstawy zdrowego odżywiania",
        author: "Anna Kowalska",
        price: "49.99 zł",
        image: "/ph0.png",
        rating: 4.5,
        reviews: 128
      },
      // Add more books...
    ],
    recommended: [
      {
        id: 1,
        title: "Dieta bez wyrzeczeń",
        author: "Maria Nowak",
        price: "39.99 zł",
        image: "/ph0.png",
        rating: 4.8,
        reviews: 85
      },
      // Add more books...
    ],
    newest: [
      {
        id: 1,
        title: "Zdrowe przepisy na każdy dzień",
        author: "Piotr Wiśniewski",
        price: "54.99 zł",
        image: "/ph0.png",
        rating: 4.2,
        reviews: 45
      },
      // Add more books...
    ],
    category4: [
      {
        id: 1,
        title: "Mindful Eating",
        author: "Katarzyna Zielińska",
        price: "44.99 zł",
        image: "/ph0.png",
        rating: 4.6,
        reviews: 92
      },
      // Add more books...
    ]
  };

  function renderStars(rating) {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  }
</script>

<Navbar />

<!-- Hero Section -->
<div class="relative w-full h-[50vh] mb-12">
  <img 
    src="/ph0.png" 
    alt="Księgarnia Hero" 
    class="w-full h-full object-cover"
  >
  <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Księgarnia StopJojo</h1>
      <p class="text-xl md:text-2xl">Odkryj nasze bestsellery i nowości wydawnicze</p>
    </div>
  </div>
</div>

<!-- Book Categories -->
<div class="w-11/12 mx-auto space-y-12 mb-24">
  <!-- Bestsellers -->
  <section>
    <h2 class="text-2xl font-bold mb-6">Bestsellery</h2>
    <div class="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
      {#each Array(8) as _, i}
        <div class="flex-none w-48 md:w-64">
          <a href="/ksiazka" class="block group">
            <div class="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <img src="/ph0.png" alt="Book cover" class="w-full aspect-[3/4] object-cover rounded-t-lg">
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1 truncate group-hover:text-gray-600 transition-colors">Tytuł książki {i + 1}</h3>
                <p class="text-gray-600 text-sm mb-2">Autor</p>
                <div class="text-yellow-400 text-sm mb-1">{renderStars(4.5)}</div>
                <p class="font-bold text-lg">49.99 zł</p>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </section>

  <!-- Recommended -->
  <section>
    <h2 class="text-2xl font-bold mb-6">Polecane</h2>
    <div class="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
      {#each Array(8) as _, i}
        <div class="flex-none w-48 md:w-64">
          <div class="bg-white rounded-lg shadow-lg">
            <img src="/ph0.png" alt="Book cover" class="w-full aspect-[3/4] object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="font-bold text-lg mb-1 truncate">Tytuł książki {i + 1}</h3>
              <p class="text-gray-600 text-sm mb-2">Autor</p>
              <div class="text-yellow-400 text-sm mb-1">{renderStars(4.5)}</div>
              <p class="font-bold text-lg">49.99 zł</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Newest -->
  <section>
    <h2 class="text-2xl font-bold mb-6">Najnowsze</h2>
    <div class="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
      {#each Array(8) as _, i}
        <div class="flex-none w-48 md:w-64">
          <div class="bg-white rounded-lg shadow-lg">
            <img src="/ph0.png" alt="Book cover" class="w-full aspect-[3/4] object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="font-bold text-lg mb-1 truncate">Tytuł książki {i + 1}</h3>
              <p class="text-gray-600 text-sm mb-2">Autor</p>
              <div class="text-yellow-400 text-sm mb-1">{renderStars(4.5)}</div>
              <p class="font-bold text-lg">49.99 zł</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Category 4 -->
  <section>
    <h2 class="text-2xl font-bold mb-6">Kategoria 4</h2>
    <div class="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
      {#each Array(8) as _, i}
        <div class="flex-none w-48 md:w-64">
          <div class="bg-white rounded-lg shadow-lg">
            <img src="/ph0.png" alt="Book cover" class="w-full aspect-[3/4] object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="font-bold text-lg mb-1 truncate">Tytuł książki {i + 1}</h3>
              <p class="text-gray-600 text-sm mb-2">Autor</p>
              <div class="text-yellow-400 text-sm mb-1">{renderStars(4.5)}</div>
              <p class="font-bold text-lg">49.99 zł</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<Footer />

<style>
  /* Hide scrollbar but keep functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style> 