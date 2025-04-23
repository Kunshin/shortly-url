type Props = {
    title: string;
    description?: string;
    code?: string;
};

export default function ErrorMessage({ title, description, code }: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 max-w-lg w-full text-center">
                <div className="text-[40px] mb-2 text-[#2acfcf]">⚠️</div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
                {description && (
                    <p className="text-gray-600 mb-4">{description}</p>
                )}
                {code && (
                    <p className="text-sm text-gray-400 mb-4">
                        Code: <code className="bg-gray-100 px-2 py-1 rounded">{code}</code>
                    </p>
                )}
                {/* <a
                    href="/"
                    className="inline-block bg-[#2acfcf] hover:bg-[#25baba] text-white px-6 py-2 rounded font-medium transition"
                >
                    Back to home page
                </a> */}
            </div>
        </div>
    );
}
