'use client';

import { ChevronDownIcon, ArrowRightOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Login({ session }) {
  if (!session) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Calculate dropdown position
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 1024;
      
      if (isMobile) {
        setDropdownPosition({
          top: 60,
          right: 16
        });
      } else {
        setDropdownPosition({
          top: buttonRect.bottom + 8,
          right: window.innerWidth - buttonRect.right
        });
      }
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl hover:bg-light-accent transition-colors cursor-pointer border border-secondary-neutral-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={32}
          height={32}
          className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
        />
        <div className="text-left hidden sm:block">
          <div className="text-sm font-medium text-foreground">
            {session.user.name?.split(' ')[0]}
          </div>
        </div>
        <ChevronDownIcon className={`w-4 h-4 text-muted transition-transform ${isOpen ? 'rotate-180' : ''} flex-shrink-0`} />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} />
          {/* Dropdown */}
          <div 
            className="fixed w-64 lg:w-72 bg-white border border-secondary-neutral-light rounded-lg lg:rounded-xl shadow-xl p-4 z-[9999]"
            style={{
              top: `${dropdownPosition.top}px`,
              right: `${dropdownPosition.right}px`
            }}
          >
            <div className="flex items-center gap-3 lg:gap-4 pb-4 border-b border-secondary-neutral-light">
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm lg:text-base font-semibold text-foreground truncate">
                  {session.user.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted truncate">{session.user.email}</p>
              </div>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-3 px-3 py-2 text-xs lg:text-sm text-muted">
                <UserIcon className="w-4 h-4 flex-shrink-0" />
                CMS Administrator
              </div>
              
              <button 
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors min-h-[44px] lg:min-h-0"
                onClick={() => signOut({ redirectTo: '/cms/sign-in' })}
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4 flex-shrink-0" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
