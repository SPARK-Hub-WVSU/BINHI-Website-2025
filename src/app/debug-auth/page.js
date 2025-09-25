import { auth } from '@/auth';

export default async function DebugAuth() {
    const session = await auth();
    
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Auth Debug Information</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Session Data:</h2>
                <pre className="text-sm overflow-auto">
                    {JSON.stringify(session, null, 2)}
                </pre>
            </div>
            
            {session?.user?.email && (
                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                    <h2 className="font-semibold mb-2">Email Check:</h2>
                    <p>Email: {session.user.email}</p>
                    <p>Ends with @wvsu.edu.ph: {session.user.email.endsWith('@wvsu.edu.ph') ? '✅ Yes' : '❌ No'}</p>
                    <p>Has CMS Access: {session.user.hasCMSAccess ? '✅ Yes' : '❌ No'}</p>
                </div>
            )}
            
            <div className="mt-4">
                <a href="/cms" className="text-blue-500 underline">Try accessing CMS</a>
            </div>
        </div>
    );
}