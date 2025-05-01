import { permanentRedirect } from 'next/navigation';
import ErrorMessage from '@/components/ErrorMessage';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default async function RedirectPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const API_URL = process.env.API_URL;

    const title = "Error";
    let errorMsg = "";

    const response = await fetch(`${API_URL}/api/link/${code}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: 'no-store',
    });

    if (response.ok) {
        const { status, data, message } = await response.json();

        if (status === "success") {
            const { destination } = data;

            if (destination) {
                permanentRedirect(destination);
            }
        }

        errorMsg = message || "An error occurred";
    } else {
        errorMsg = "An error occurred";
    }

    return (
        <>
            {/* <Header /> */}
            <main>
                <ErrorMessage title={title} description={errorMsg} code={code} />
            </main>
            {/* <Footer /> */}
        </>
    );
}
