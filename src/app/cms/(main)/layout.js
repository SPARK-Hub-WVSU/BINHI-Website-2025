import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Logo from '@/components/Logo';
import Navigation from './Navigation.jsx';
import Login from './Login.jsx';

export default async function Layout({ children }) {
  const session = await auth();

  // Redirect to sign-in if not authenticated
  if (!session) {
    redirect('/cms/sign-in?callbackUrl=/cms');
  }

  // Redirect to unauthorized if user doesn't have CMS access
  if (!session.user?.hasCMSAccess) {
    redirect('/cms/unauthorized');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white px-4 py-2.5 flex items-center justify-between border-b border-gray-100 sticky top-0 z-40">
        <Logo scale={0.55} />
        <Login session={session} />
      </div>

      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 bg-white flex-col lg:min-h-screen lg:sticky lg:top-0">
          <div className="p-6">
            <Logo scale={0.8} />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Navigation />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:min-h-screen relative">
          {/* Desktop Header */}
          <div className='hidden lg:flex bg-white px-8 py-4 justify-end border-b border-gray-100 sticky top-0 z-30 relative'>
            <Login session={session} />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden bg-white border-b border-gray-100 sticky top-0 z-30 mt-0">
            <Navigation />
          </div>

          {/* Page Content */}
          <div className="px-4 py-4 lg:px-8 lg:py-8 max-w-full overflow-x-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}