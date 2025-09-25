import AuthProvider from './AuthProvider';

export default async function Layout({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}