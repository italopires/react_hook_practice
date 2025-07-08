import PostsList from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post/json-post-repository';
import { Suspense } from 'react';

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <div className='text-slate-900 bg-slate-100 min-h-screen'>
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>
          This is the Header
        </h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <footer className='text-6x1 font-bold text-center py-8'>
          This is the Footer
        </footer>
      </footer>
    </div>
  );
}
