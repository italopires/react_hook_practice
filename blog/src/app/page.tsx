import { postRepository } from '@/repositories/post/json-post-repository';

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>
          This is the Header
        </h1>
      </header>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
      <footer>
        <footer className='text-6x1 font-bold text-center py-8'>
          This is the Footer
        </footer>
      </footer>
    </div>
  );
}
