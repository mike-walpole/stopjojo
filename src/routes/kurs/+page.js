import { client } from '$lib/sanityClient';

export async function load({ params }) {
  const query = `*[_type == "course"][0]{
    title,
    shortIntroduction,
    description,
    videoUrl,
    keyDeliverables,
    authors[]{
      name,
      bio
    },
    modules[]{
      title,
      description
    }
  }`;

  const course = await client.fetch(query);

  return {
    course
  };
}
