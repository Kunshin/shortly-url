'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                alt="menu"
                width={28}
                height={28}
                onClick={() => setIsOpen((prev) => !prev)}
            />
            <div className={`justify-between flex-1 ms-16 font-semibold text-grayish-violet text-center hidden md:flex ${isOpen && 'open-menu'}`}>
                <nav className="flex flex-col lg:flex-row items-center gap-6">
                    <Link href={"#"}>Features</Link>
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>Resources</Link>
                </nav>
                <hr className="lg:hidden" />
                <nav className="flex flex-col lg:flex-row items-center gap-6">
                    <Link href={"#"}>Login</Link>
                    <Link href={"#"} className="bg-primary rounded-full text-white px-6 py-3 w-full lg:w-fit">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};