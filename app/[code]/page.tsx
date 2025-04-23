import { permanentRedirect } from 'next/navigation';
import ErrorMessage from '../../components/ErrorMessage';

export default async function RedirectPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    let errorMsg = "Không tìm thấy link rút gọn";
    const API_URL = "https://demo.toicoding.com/";

    const response = await fetch(`${API_URL}/api/link/${code}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: 'no-store', // đảm bảo luôn fetch mới, không bị cache
    });

    if (response.ok) {
        const { status, data, message } = await response.json();

        if (status === "success") {
            const { destination } = data;

            if (destination) {
                permanentRedirect(destination);
            }
        }

        errorMsg = message;
    }

    const title = "Error";

    return <ErrorMessage title={title} description={errorMsg} code={code} />;
}
