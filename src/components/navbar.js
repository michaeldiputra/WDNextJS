import Link from "next/link";

export default function Navbar() {
    return(
        <>
            <div className="flex justify-center">
                <div className="flex gap-5">
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>
            </div>
        </>
    )
}