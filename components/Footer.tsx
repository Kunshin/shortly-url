import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-80 bg-black text-white px-[10%] py-[5%] flex flex-col md:flex-row items-center md:items-start justify-between">
            <div>
                <Link href={"#"}>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={128}
                        height={24}
                    />
                </Link>
            </div>

            <div className="flex gap-16 flex-col md:flex-row">
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h4>Features</h4>
                    <Link href={'#'}>Link Shortening</Link>
                    <Link href={'#'}>Branded Links</Link>
                    <Link href={'#'}>Analytics</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h4>Resources</h4>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Developers</Link>
                    <Link href={'#'}>Support</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h4>Company</h4>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Our Team</Link>
                    <Link href={'#'}>Careers</Link>
                    <Link href={'#'}>Contact</Link>
                </div>

                <div className="flex gap-4">
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-facebook.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-twitter.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-pinterest.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src="/images/icon-instagram.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};