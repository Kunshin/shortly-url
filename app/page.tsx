'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";

export default function Home() {
    const [shortenUrls, setShortenUrls] = useState<any>([]);
    const [isValid, setIsValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState('Please add a link');
    const [longUrl, setLongUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsValid(false);

        if (longUrl.length > 0) {
            const res = await fetch('/api/shorten', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ long_url: longUrl }),
            });

            const { data, ...result } = await res.json();
            if (result.status === "success") {
                setLongUrl('');
                handleSave(data);
            } else {
                setErrorMsg(result.message);
                setIsValid(true);
            }
        } else {
            setIsValid(true);
        }
    };

    const handleSave = (url: any) => {
        const dataUrls = [{ original_url: url.original_url, short_url: `${window.location.origin}/${url.short_code}` }, ...shortenUrls];
        sessionStorage.setItem('urls', JSON.stringify(dataUrls));
        setShortenUrls(dataUrls);
    };

    useEffect(() => {
        const dataUrls = JSON.parse(sessionStorage.getItem('urls') || '[]');
        if (dataUrls) {
            setShortenUrls(dataUrls);
        }
    }, []);

    return (
        <>
            <Header />

            <main>
                <section className="min-h-[500px] h-screen md:h-[calc(100vh-6rem)] flex flex-col-reverse md:flex-row justify-between md:pl-[10%] md:py-6 overflow-x-hidden">
                    <div className="flex-[1.2] md:flex-1 w-full px-6 md:px-0 py-10 md:pt-16 text-center md:text-left">
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold">More than just shorter links</h1>
                        <p className="text-lg font-semibold text-grayish-violet my-8">
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </p>
                        <Link href={"#"} className="bg-primary rounded-full text-white px-8 py-3 font-bold text-xl inline-block">Get Started</Link>
                    </div>
                    <div className="flex-1 w-full h-full bg-[url(/images/illustration-working.svg)] bg-no-repeat bg-cover md:bg-contain translate-x-6 lg:translate-x-28"></div>
                </section>

                <section className="min-h-[500px] bg-gray-100 flex flex-col items-center justify-end px-6 md:px-[10%] py-20">
                    <div className="w-full relative">
                        <form
                            className="bg-secondary bg-[url(/images/bg-shorten-mobile.svg)] lg:bg-[url(/images/bg-shorten-desktop.svg)] bg-no-repeat lg:bg-repeat-round bg-right-top lg:bg-left p-6 lg:p-12 rounded-lg absolute -top-20 -translate-y-1/2 w-full flex flex-col lg:flex-row gap-8 lg:gap-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="relative w-full lg:w-4/5">
                                <input
                                    className={`w-full p-4 rounded-lg border-2 text-lg font-bold ${isValid && "text-red-400 border-red-400"}`}
                                    type="url"
                                    placeholder="Shorten a link here..."
                                    value={longUrl}
                                    onChange={(e) => setLongUrl(e.target.value)}
                                />
                                {isValid && (
                                    <label className="text-red-400 font-semibold italic absolute left-0 -bottom-6">{errorMsg}</label>
                                )}
                            </div>
                            <button className="bg-primary rounded-lg text-white text-xl font-bold w-full lg:w-1/5 p-4" type="submit">Shorten It!</button>
                        </form>

                        {shortenUrls.length > 0 && (
                            <div className="mt-10">
                                {shortenUrls.map((item: any, index: number) => {
                                    return (
                                        <div className="bg-white p-4 md:px-6 md:py-3 mt-5 rounded-md flex flex-col md:flex-row md:items-center gap-2" key={index}>
                                            <Link className="w-full truncate" href={item.original_url}>{item.original_url}</Link>
                                            <hr className="md:hidden" />
                                            <Link className="text-primary w-full truncate md:text-right" href={item.short_url}>{item.short_url}</Link>
                                            <CopyButton textToCopy={item.short_url} />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="mt-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-center my-6">Advanced Statistics</h2>
                        <p className="text-lg text-center text-grayish-violet">
                            Track how your links are performing across the web with our advanced statistics dashboard.
                        </p>
                        <div className="flex flex-col md:flex-row gap-10 my-20 text-center md:text-left relative">
                            <div className="bg-primary w-2 h-full md:w-full md:h-2 absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2"></div>
                            <div className="bg-white rounded-md p-10 relative">
                                <figure className="bg-secondary size-20 flex justify-center items-center rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-1/2">
                                    <Image
                                        src="/images/icon-brand-recognition.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                    />
                                </figure>
                                <h3 className="text-2xl font-bold mt-6 mb-4">Brand Recognition</h3>
                                <p className="text-grayish-violet">
                                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                            <div className="bg-white rounded-md p-10 relative top-10">
                                <figure className="bg-secondary size-20 flex justify-center items-center rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-1/2">
                                    <Image
                                        src="/images/icon-detailed-records.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                    />
                                </figure>
                                <h3 className="text-2xl font-bold mt-6 mb-4">Detailed Records</h3>
                                <p className="text-grayish-violet">
                                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                </p>
                            </div>
                            <div className="bg-white rounded-md p-10 relative top-20">
                                <figure className="bg-secondary size-20 flex justify-center items-center rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-1/2">
                                    <Image
                                        src="/images/icon-fully-customizable.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                </figure>
                                <h3 className="text-2xl font-bold mt-6 mb-4">Fully Customizable</h3>
                                <p className="text-grayish-violet">
                                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="h-72 bg-secondary bg-[url(/images/bg-boost-mobile.svg)] sm:bg-[url(/images/bg-boost-desktop.svg)] bg-repeat-round flex flex-col justify-center items-center gap-4">
                    <h2 className="font-bold text-3xl md:text-4xl text-white">Boost your links today</h2>
                    <Link href={"#"} className="bg-primary rounded-full text-white px-8 py-3 font-bold text-xl">Get Started</Link>
                </section>
            </main>

            <Footer />
        </>
    );
}
