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
      <aside className="w-xs border-r border-secondary-neutral">
        <div className="m-6">
          <Logo />
        </div>
        <Navigation />
      </aside>
      <main className="grow flex flex-col p-8">
        <Login session={session} />
        {children}
      </main>
    </div>
  );
}