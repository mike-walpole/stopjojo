<script>
  import { client } from '$lib/sanityClient';
  import { onMount } from 'svelte';
  import { urlFor } from '$lib/utils';

  let articles = [];

  onMount(async () => {
    const query = `*[_type == "artykul"] | order(publishedAt desc)[0...3]{
      title,
      slug,
      quip,
      mainImage{
        asset->,
        alt
      },
      author->{
        name
      }
    }`;

    articles = await client.fetch(query);
  });
</script>

<div class="w-11/12 mx-auto py-12 font-haas border-t border-gray-200 mt-12">
  <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Magazyn StopJojo</p>
  <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">
    Historie, porady, inspiracje
  </h2>
</div>
<div class="w-11/12 max-w-5xl mx-auto py-24">
  {#each articles as article, i}
    <a href="/magazyn/{article.slug.current}" class="block group">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[400px] mb-48">
        <!-- Image -->
        <div class="aspect-square order-first {i % 2 === 1 ? 'md:order-last' : 'md:order-first'} overflow-hidden">
          <img 
            src={urlFor(article.mainImage).width(400).height(400).url()} 
            alt={article.mainImage.alt} 
            class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <!-- Content with top border -->
        <div class="relative flex flex-col justify-center">
          <div class="absolute top-0 left-0 w-1/3 border-t-8 border-black"></div>
          <h2 class="text-2xl font-bold mb-4 pt-8 group-hover:text-gray-600 transition-colors">{article.title}</h2>
          <p class="text-gray-600 mb-4">{article.quip}</p>
          <p class="text-sm">Autor: {article.author.name}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
