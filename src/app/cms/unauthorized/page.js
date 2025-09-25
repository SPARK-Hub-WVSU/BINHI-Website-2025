import Link from 'next/link';
import { ExclamationTriangleIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Unauthorized() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-secondary-neutral-light p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                </div>
                
                {/* Content */}
                <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
                <p className="text-muted mb-6">
                    You don't have permission to access the BINHI Content Management System. 
                    Only specific authorized WVSU accounts can access the CMS. 
                    Please contact the BINHI administrator if you believe this is an error.
                </p>
                
                {/* Actions */}
                <div className="space-y-3">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        <HomeIcon className="w-4 h-4 mr-2" />
                        Return to Website
                    </Link>
                    <Link
                        href="/cms/sign-in"
                        className="inline-flex items-center justify-center w-full px-4 py-2 border border-secondary-neutral-light text-muted rounded-lg hover:bg-light-accent transition-colors"
                    >
                        Sign In with Different Account
                    </Link>
                </div>
            </div>
        </div>
    );
}