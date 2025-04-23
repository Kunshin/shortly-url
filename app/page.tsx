import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />

            <main className="">
                <section className="h-screen flex flex-col-reverse md:flex-row justify-between md:pl-[10%] md:py-8 overflow-x-hidden">
                    <div className="flex-[1.2] md:flex-1 px-6 md:px-0 py-10 text-center md:text-left">
                        <h1 className="text-5xl md:text-8xl font-bold text-[var(--secondary-color)] md:mt-8">More than just shorter links</h1>
                        <p className="text-xl font-semibold text-[var(--gray-color)] my-8">Build your brand’s recognition and get detailed insights
                            on how your links are performing.</p>
                        <Link href={"#"} className="bg-[var(--primary-color)] rounded-full text-white p-4 font-bold inline-block text-center w-2/3 md:w-1/5">Get Started</Link>
                    </div>
                    <div className="flex-1 w-full h-full bg-[url(/images/illustration-working.svg)] bg-no-repeat bg-cover md:bg-auto relative left-6 md:left-[10%] md:ml-0"></div>
                </section>

                <section className="min-h-[500px] bg-[#eff1f7] flex flex-col items-center justify-end px-6 md:px-[10%] py-[6%] relative">
                    <div className="bg-[#3b3054] bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-right-bottom p-6 md:p-12 rounded-lg absolute -top-[4.5rem] w-[80%] mx-[10%] flex flex-col md:flex-row gap-8 md:gap-4">
                        <div className="relative w-full md:w-4/5">
                            <input className="p-4 rounded-lg border-2 border-[#f46262] w-full" type="url" placeholder="Shorten a link here..." />
                            <label className="text-[#f46262] font-semibold italic absolute left-0 -bottom-6">Please add a link</label>
                        </div>
                        <button className="bg-[var(--primary-color)] rounded-lg text-white font-bold w-full md:w-1/5 p-4">Shorten It!</button>
                    </div>

                    <div className="w-full">
                        <div className="bg-white px-6 py-4 mt-6 rounded-md flex flex-col md:flex-row items-center">
                            <Link className="w-full truncate" href={'https://www.frontendmentor.io'}>https://www.frontendmentor.io</Link>
                            <Link className="text-[var(--primary-color)]" href={'https://rel.ink/k4lKyk'}>https://rel.ink/k4lKyk</Link>
                            <button className="bg-[var(--primary-color)] rounded-md text-white font-bold p-2 w-32 ml-6">Copy</button>
                        </div>
                        <div className="bg-white px-6 py-4 mt-6 rounded-md flex flex-col md:flex-row items-center">
                            <Link className="w-full truncate" href={'https://twitter.com/frontendmentor'}>https://twitter.com/frontendmentor</Link>
                            <Link className="text-[var(--primary-color)]" href={'https://rel.ink/gxOXp9'}>https://rel.ink/gxOXp9</Link>
                            <button className="bg-[#3b3054] rounded-md text-white font-bold p-2 w-32 ml-6">Copied!</button>
                        </div>
                        <div className="bg-white px-6 py-4 mt-6 rounded-md flex flex-col md:flex-row items-center">
                            <Link className="w-full truncate" href={'https://www.linkedin.com/company/frontend-mentor'}>https://www.linkedin.com/company/frontend-mentor</Link>
                            <Link className="text-[var(--primary-color)]" href={'https://rel.ink/gob3X9'}>https://rel.ink/gob3X9</Link>
                            <button className="bg-[var(--primary-color)] rounded-md text-white font-bold p-2 w-32 ml-6">Copy</button>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-center mt-[8rem]">Advanced Statistics</h2>
                    <p className="text-center">Track how your links are performing across the web with our
                        advanced statistics dashboard.</p>
                    <div className="flex flex-col md:flex-row gap-8 my-[80px] relative">
                        <div className="bg-[var(--primary-color)] w-[10px] h-full md:w-full md:h-[10px] absolute left-[50%] md:left-0 md:top-[50%]"></div>
                        <div className="bg-white rounded-md p-10 relative">
                            <figure className="bg-[#3b3054] size-[80px] flex justify-center items-center rounded-full absolute top-[-40px]">
                                <Image
                                    src="/images/icon-brand-recognition.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </figure>
                            <h3 className="text-2xl font-bold mt-8">Brand Recognition</h3>
                            <p>Boost your brand recognition with each click. Generic links don’t
                                mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                        <div className="bg-white rounded-md p-10 relative top-[40px]">
                            <figure className="bg-[#3b3054] size-[80px] flex justify-center items-center rounded-full absolute top-[-40px]">
                                <Image
                                    src="/images/icon-detailed-records.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </figure>
                            <h3 className="text-2xl font-bold mt-8">Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where
                                people engage with your content helps inform better decisions.</p>
                        </div>
                        <div className="bg-white rounded-md p-10 relative top-[80px]">
                            <figure className="bg-[#3b3054] size-[80px] flex justify-center items-center rounded-full absolute top-[-40px]">
                                <Image
                                    src="/images/icon-fully-customizable.svg"
                                    alt=""
                                    width={48}
                                    height={48}
                                />
                            </figure>
                            <h3 className="text-2xl font-bold mt-8">Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable
                                links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </section>

                <section className="h-64 bg-[#3b3054] bg-[url(/images/bg-boost-desktop.svg)] bg-repeat-round flex flex-col justify-center items-center gap-4">
                    <h2 className="text-3xl text-white">Boost your links today</h2>
                    <Link href={"#"} className="bg-[var(--primary-color)] rounded-3xl text-white p-2 font-semibold">Get Started</Link>
                </section>
            </main>

            <Footer />
        </>
    );
}
