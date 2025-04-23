import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-24 flex justify-between items-center px-6 md:px-[10%] py-6">
            <Link href={"#"}>
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={128}
                    height={24}
                />
            </Link>
            <Image
                className="md:hidden"
                src="/images/icon-menu.svg"
                alt=""
                width={28}
                height={28}
            />
            <div className="flex justify-between flex-1 ms-4 hidden md:flex">
                <nav className="space-x-6">
                    <Link href={"#"}>Features</Link>
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>Resources</Link>
                </nav>
                <nav className="space-x-6">
                    <Link href={"#"}>Login</Link>
                    <Link href={"#"} className="bg-cyan-400 rounded-2xl text-white p-2 font-semibold">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};