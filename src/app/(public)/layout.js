import Header from "./Header";
import Footer from "./Footer";

export default function PublicLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}