'use client';
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
	const pathname = usePathname();
	
	return (
		<div className="w-full absolute bg-white h-20 text-inactive rounded-t-3xl flex justify-around items-center bottom-0 overflow-hidden">
			<Link href="/" className="flex flex-col gap-y-1 h-full w-1/3 items-center justify-center relative pb-4">
				<div>
					<Image src={pathname === "/" ? "/home/home-active.svg" : "/home/home.svg"} alt="Home" width={36} height={36} />
				</div>
				<p className={`text-xs absolute bottom-3 right-1/2 translate-x-1/2 ${pathname === "/" ? "text-aqua" : ""}`}>Home</p>
			</Link>
			<Link href="/consultant" className="flex flex-col gap-y-1 h-full w-1/3 items-center justify-center relative pb-4">
				<div>
					<Image src={pathname === "/consultant" ? "/home/consultant-active.svg" : "/home/consultant.svg"} alt="consultant" width={67} height={36} />
				</div>
				<p className={`text-xs absolute bottom-3 right-1/2 translate-x-1/2 ${pathname === "/consultant" ? "text-aqua" : ""}`}>Consultant</p>
			</Link>
			<Link href="/profile" className="flex flex-col gap-y-1 h-full w-1/3 items-center justify-center relative pb-4">
				<div>
					<Image src={pathname === "/profile" ? "/home/profile-active.svg" : "/home/profile.svg"} alt="profile" width={36} height={36} />
				</div>
				<p className={`text-xs absolute bottom-3 right-1/2 translate-x-1/2 ${pathname === "/profile" ? "text-aqua" : ""}`}>Profile</p>
			</Link>
		</div>
	)
}