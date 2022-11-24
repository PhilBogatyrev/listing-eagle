export async function getStaticProps() {
  // fetch the blog posts from the mock API
  const res = await fetch("https://catfact.ninja/fact");
  const posts = await res.json();

  console.log(posts);
  return posts;

  /*return {
    props: { posts }, // props will be passed to the page
  };*/
}

export default function handler(req, res) {
  res.status(200).json(getStaticProps());
}
