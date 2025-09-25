import { signIn } from '@/auth';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { HomeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { redirect } from 'next/navigation';

export default function SignIn({ searchParams }) {
  const error = searchParams?.error;
  const callbackUrl = searchParams?.callbackUrl || '/cms';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-secondary-neutral-light p-8">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Content Management System</h1>
          <p className="text-muted">Sign in with your authorized WVSU account to manage BINHI website content</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <div className="text-red-400 mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-red-700 text-sm">
                {error === 'AccessDenied' ? 
                  'Access denied. Please use an authorized WVSU email address or contact the administrator.' : 
                  'An error occurred during sign in. Please try again.'}
              </div>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="mb-6 p-4 bg-light-accent rounded-lg border border-secondary-neutral-light">
          <div className="flex items-start">
            <ShieldCheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-medium text-foreground mb-1">Secure Access</div>
              <div className="text-muted">Only authorized WVSU accounts can access this system.</div>
            </div>
          </div>
        </div>

        {/* Sign In Form */}
        <form
          action={async () => {
            'use server';
            await signIn('google', { redirectTo: callbackUrl });
          }}
          className="space-y-4">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with WVSU Google Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-secondary-neutral-light text-center">
          <Link
            href="/"
            className="inline-flex items-center text-muted hover:text-primary transition-colors text-sm"
          >
            <HomeIcon className="w-4 h-4 mr-2" />
            Return to BINHI Website
          </Link>
        </div>
      </div>
    </div>
  );
}
