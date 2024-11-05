<script>
  import { urlFor } from '$lib/utils';
  
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Artykuły - Zdrowie i Dieta</title>
</svelte:head>

<div class="w-11/12 max-w-5xl mx-auto py-24">
  {#each data.articles as article, i}
    <!-- Desktop: alternating layout, Mobile: always image first -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[400px] mb-48">
      <!-- Image -->
      <div class="aspect-square order-first {i % 2 === 1 ? 'md:order-last' : 'md:order-first'}">
        <img 
          src={urlFor(article.mainImage).width(400).height(400).url()} 
          alt={article.mainImage.alt} 
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Content with top border -->
      <div class="relative flex flex-col justify-center">
        <div class="absolute top-0 left-0 w-1/3 border-t-8 border-black"></div>
        <h2 class="text-2xl font-bold mb-4 pt-8">{article.title}</h2>
        <p class="text-gray-600 mb-4">{article.quip}</p>
        <p class="text-sm">Autor: {article.author.name}</p>
      </div>
    </div>
  {/each}
</div>
