import { signIn } from '@/auth';
import Logo from '@/components/Logo';

export default function SignIn() {
  return (
    <div className="fixed inset-0 grid place-items-center">
      <form
        action={async () => {
          'use server';
          await signIn('google', { redirectTo: '/cms/news' });
        }}
        className="border border-primary-light p-6 rounded-xl flex flex-col items-center">
        <Logo />
        <h2 className="text-lg font-medium">Content Management System</h2>
        <button
          type="submit"
          className="cursor-pointer mt-8 bg-primary w-full rounded-md py-2 text-background text-base font-light">
          Sign in using WVSU Email
        </button>
      </form>
    </div>
  );
}
