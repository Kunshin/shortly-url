'use client'

import { useState } from 'react';

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Error while copying:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`${copied ? 'bg-secondary' : 'bg-primary'} rounded-md text-white font-bold p-2 w-full md:w-32 md:ml-4`}
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}
