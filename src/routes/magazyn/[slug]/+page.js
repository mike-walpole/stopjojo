import { client } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const query = `*[_type == "artykul" && slug.current == $slug][0]{
    title,
    quip,
    mainImage{
      asset->,
      alt
    },
    author->{
      name
    },
    content
  }`;

  const article = await client.fetch(query, { slug: params.slug });

  if (!article) {
    throw error(404, 'Article not found');
  }

  return {
    article
  };
} 