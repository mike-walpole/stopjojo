<script>
  import { urlFor } from '$lib/utils';
  
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Magazyn - StopJojo</title>
</svelte:head>

<div class="w-11/12 max-w-5xl mx-auto py-24">
  <h1 class="text-6xl font-bold mb-16">Magazyn</h1>
  
  <div class="grid grid-cols-1 gap-16">
    {#each data.articles as article}
      <a href="/magazyn/{article.slug.current}" class="block group">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="aspect-square overflow-hidden">
            <img 
              src={urlFor(article.mainImage).width(800).height(800).url()} 
              alt={article.mainImage.alt} 
              class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
              {article.title}
            </h2>
            <p class="text-gray-600 mb-4">{article.quip}</p>
            <p class="text-sm">Autor: {article.author.name}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div> 