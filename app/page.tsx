import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <section className="h-screen md:h-[calc(100vh-6rem)] flex flex-col-reverse md:flex-row justify-between md:pl-[10%] md:py-6 overflow-x-hidden">
                    <div className="flex-[1.2] md:flex-1 w-full px-6 md:px-0 py-10 md:pt-16 text-center md:text-left">
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold">More than just shorter links</h1>
                        <p className="text-lg font-semibold text-grayish-violet my-8">
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </p>
                        <Link href={"#"} className="bg-primary rounded-full text-white px-8 py-3 font-bold text-xl inline-block">Get Started</Link>
                    </div>
                    <div className="flex-1 w-full h-full bg-[url(/images/illustration-working.svg)] bg-no-repeat bg-cover md:bg-contain translate-x-6 md:translate-x-28"></div>
                </section>

                <section className="min-h-[500px] bg-gray-100 flex flex-col items-center justify-end px-6 md:px-[10%] py-20">
                    <div className="w-full relative">
                        <div className="bg-secondary bg-[url(/images/bg-shorten-mobile.svg)] md:bg-[url(/images/bg-shorten-desktop.svg)] bg-no-repeat md:bg-repeat-round bg-right-top md:bg-left p-6 md:p-12 rounded-lg absolute -top-20 -translate-y-1/2 w-full flex flex-col md:flex-row gap-8 md:gap-4">
                            <div className="relative w-full md:w-4/5">
                                <input className="w-full p-4 rounded-lg border-2 text-lg font-bold text-red-400 border-red-400" type="url" placeholder="Shorten a link here..." />
                                <label className="text-red-400 font-semibold italic absolute left-0 -bottom-6">Please add a link</label>
                            </div>
                            <button className="bg-primary rounded-lg text-white text-xl font-bold w-full md:w-1/5 p-4">Shorten It!</button>
                        </div>

                        <div className="mt-10">
                            <div className="bg-white p-4 md:px-6 md:py-3 mt-5 rounded-md flex flex-col md:flex-row md:items-center gap-2">
                                <Link className="w-full truncate" href={'https://www.frontendmentor.io'}>https://www.frontendmentor.io</Link>
                                <hr className="md:hidden" />
                                <Link className="text-primary" href={'https://rel.ink/k4lKyk'}>https://rel.ink/k4lKyk</Link>
                                <button className="bg-primary rounded-md text-white font-bold p-2 w-full md:w-32 md:ml-4">Copy</button>
                            </div>
                            <div className="bg-white p-4 md:px-6 md:py-3 mt-5 rounded-md flex flex-col md:flex-row md:items-center gap-2">
                                <Link className="w-full truncate" href={'https://twitter.com/frontendmentor'}>https://twitter.com/frontendmentor</Link>
                                <hr className="md:hidden" />
                                <Link className="text-primary" href={'https://rel.ink/gxOXp9'}>https://rel.ink/gxOXp9</Link>
                                <button className="bg-secondary rounded-md text-white font-bold p-2 w-full md:w-32 md:ml-4">Copied!</button>
                            </div>
                            <div className="bg-white p-4 md:px-6 md:py-3 mt-5 rounded-md flex flex-col md:flex-row md:items-center gap-2">
                                <Link className="w-full truncate" href={'https://www.linkedin.com/company/frontend-mentor'}>https://www.linkedin.com/company/frontend-mentor</Link>
                                <hr className="md:hidden" />
                                <Link className="text-primary" href={'https://rel.ink/gob3X9'}>https://rel.ink/gob3X9</Link>
                                <button className="bg-primary rounded-md text-white font-bold p-2 w-full md:w-32 md:ml-4">Copy</button>
                            </div>
                        </div>
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

                <section className="h-72 bg-secondary bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-repeat-round flex flex-col justify-center items-center gap-4">
                    <h2 className="font-bold text-3xl md:text-4xl text-white">Boost your links today</h2>
                    <Link href={"#"} className="bg-primary rounded-full text-white px-8 py-3 font-bold text-xl">Get Started</Link>
                </section>
            </main>

            <Footer />
        </>
    );
}
