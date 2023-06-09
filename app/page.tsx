async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts").then((res) => res.json());
  return res.data;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <div>Hello world</div>
      <ul>
        {posts.map((post: any) => (
          <li>post.title</li>
        ))}
      </ul>
    </main>
  );
}
