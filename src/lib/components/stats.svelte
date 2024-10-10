<script>
  const stats = [
    { number: "98%", description: "Wskaźnik sukcesu uczestników", highlight: "uczestników" },
    { number: "150+", description: "Dostępnych planów dietetycznych", highlight: "dietetycznych" },
    { number: "10+", description: "Certyfikowanych dietetyków", highlight: "dietetyków" },
    { number: "24/7", description: "Dostęp do kursów online", highlight: "online" },
  ];
</script>

<section class="py-16 ">
    
  <div class="w-11/12 mx-auto ">
    <h1 class="text-6xl md:text-9xl font-bold mb-20 text-left border-b border-gray-200 pb-10">Co robimy</h1>
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Left side - Image -->
      <div class="w-full md:w-1/2">
        <img src="/a2.webp" alt="Stats" class="w-full h-full object-cover rounded-lg">
      </div>

      <!-- Right side - Stats -->
      <div class="w-full md:w-1/2">
        <div class="flex flex-col space-y-8">
          {#each stats as stat}
            <div class="text-left md:ml-20 ">
              <p class="text-9xl font-bold mb-2">{stat.number}</p>
              <p class="text-2xl mb-10">
                {#each stat.description.split(' ') as word}
                  {#if word === stat.highlight}
                    <span class="text-gray-500">{word}</span>
                  {:else}
                    {word}
                  {/if}
                  {' '}
                {/each}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>