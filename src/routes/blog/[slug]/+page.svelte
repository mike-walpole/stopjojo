<script>
  import { urlFor } from '$lib/utils';
  import { PortableText } from '@portabletext/svelte';
  
  /** @type {import('./$types').PageData} */
  export let data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{data.article.title} - StopJojo Blog</title>
</svelte:head>

<article class="min-h-screen">
  <!-- Hero Section -->
  <div class="relative h-[70vh] w-full">
    <img 
      src={urlFor(data.article.mainImage).width(1920).url()} 
      alt={data.article.mainImage.alt} 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-11/12 max-w-3xl text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{data.article.title}</h1>
        <p class="text-xl mb-4">{data.article.quip}</p>
        <div class="flex items-center justify-center space-x-4 text-sm">
          <span>Autor: {data.article.author.name}</span>
          <span>•</span>
          <span>{formatDate(data.article.publishedAt)}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Article Content -->
  <div class="w-11/12 max-w-3xl mx-auto py-16 prose prose-lg">
    <PortableText value={data.article.content} />
  </div>
</article> 