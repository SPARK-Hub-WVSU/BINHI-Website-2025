import { auth } from '@/auth';
import Logo from '@/components/Logo';
import Navigation from './Navigation';
import Image from 'next/image';
import Login from './Login';

export default async function Layout({ children }) {
  const session = await auth();

  if (!session?.user) return <p>No user found</p>;

  return (
    <div className="fixed inset-0 flex">
      <aside className="w-xs border-r border-accent flex flex-col items-center">
        <div className="m-6">
          <Logo scale={0.8} />
        </div>
        <Navigation />
      </aside>
      <main className="grow flex flex-col p-8">
        <Login session={session} />
        <div className="grow">
          {children}
        </div>
      </main>
    </div>
  );
}