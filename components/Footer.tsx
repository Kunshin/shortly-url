import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-80 bg-very-dark-violet text-grayish-violet lg:px-36 py-[10%] lg:py-[5%] flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="mb-16">
                <Link href={"/"} className="font-bold text-4xl text-white">
                    Shortly
                </Link>
            </div>

            <div className="flex gap-16 xl:gap-24 flex-col lg:flex-row">
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <h4 className="font-bold text-white mb-2">Features</h4>
                    <Link href={'#'}>Link Shortening</Link>
                    <Link href={'#'}>Branded Links</Link>
                    <Link href={'#'}>Analytics</Link>
                </div>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <h4 className="font-bold text-white mb-2">Resources</h4>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Developers</Link>
                    <Link href={'#'}>Support</Link>
                </div>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <h4 className="font-bold text-white mb-2">Company</h4>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Our Team</Link>
                    <Link href={'#'}>Careers</Link>
                    <Link href={'#'}>Contact</Link>
                </div>

                <div className="flex items-center lg:items-start gap-6">
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-facebook.svg"
                            alt="facebook"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-twitter.svg"
                            alt="twitter"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-pinterest.svg"
                            alt="pinterest"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-instagram.svg"
                            alt="instagram"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};