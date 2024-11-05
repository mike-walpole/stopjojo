import { client } from '$lib/sanityClient';

export async function load() {
  const query = `*[_type == "artykul"] | order(publishedAt desc){
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

  const articles = await client.fetch(query);

  return {
    articles
  };
} 