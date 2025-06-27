'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Login({ session }) {
  if (!session) return null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative self-end">
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={640}
          height={640}
          className="size-10 rounded-full overflow-x-hidden"
        />
        {/* <span className="text-sm">{session.user.name}</span> */}
        <ChevronDownIcon className='size-4' />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 border border-secondary-neutral-light rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3 min-w-48">
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={640}
              height={640}
              className="size-16 rounded-full overflow-x-hidden shrink-0"
            />
            <div>
              <h3 className="text-lg/tight text-secondary font-semibold">
                {session.user.name}
              </h3>
              <p className="text-xs opacity-75">{session.user.email}</p>
            </div>
          </div>
          <button className="bg-red-300 rounded-md mt-3 w-full py-1 text-nowrap cursor-pointer text-sm" onClick={() => signOut({ redirectTo: '/cms/sign-in' })}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
