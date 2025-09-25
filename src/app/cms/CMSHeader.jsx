'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import {
    UserIcon,
    ArrowRightOnRectangleIcon,
    ChevronDownIcon,
    HomeIcon,
    NewspaperIcon
} from '@heroicons/react/24/outline';

export default function CMSHeader({ user }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };

    return (
        <header className="bg-white border-b border-secondary-neutral-light shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and CMS Title */}
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">BINHI</span>
                        </Link>
                        <div className="h-6 w-px bg-secondary-neutral-light"></div>
                        <span className="text-muted font-medium">Content Management System</span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link 
                            href="/" 
                            className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
                        >
                            <HomeIcon className="w-4 h-4" />
                            <span>Website</span>
                        </Link>
                        <Link 
                            href="/cms/news" 
                            className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
                        >
                            <NewspaperIcon className="w-4 h-4" />
                            <span>News</span>
                        </Link>
                    </nav>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center space-x-3 text-muted hover:text-foreground transition-colors p-2 rounded-lg hover:bg-light-accent"
                        >
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <UserIcon className="w-4 h-4 text-white" />
                                </div>
                            )}
                            <div className="hidden sm:block text-left">
                                <div className="text-sm font-medium text-foreground">{user.name}</div>
                                <div className="text-xs text-muted">{user.email}</div>
                            </div>
                            <ChevronDownIcon className="w-4 h-4" />
                        </button>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <>
                                <div 
                                    className="fixed inset-0 z-10" 
                                    onClick={() => setShowDropdown(false)}
                                ></div>
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-secondary-neutral-light z-20">
                                    <div className="p-4 border-b border-secondary-neutral-light">
                                        <div className="text-sm font-medium text-foreground">{user.name}</div>
                                        <div className="text-xs text-muted">{user.email}</div>
                                        <div className="text-xs text-primary font-medium mt-1">CMS Administrator</div>
                                    </div>
                                    <div className="p-2">
                                        <Link
                                            href="/"
                                            className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-light-accent rounded-md transition-colors"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            <HomeIcon className="w-4 h-4" />
                                            <span>View Website</span>
                                        </Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                                        >
                                            <ArrowRightOnRectangleIcon className="w-4 h-4" />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}