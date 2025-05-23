"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { logoutAccount } from "@/lib/actions/user.actions";
import Footer from "./Footer";

const Sidebar = ({ user }: SidebarProps) => {
    const pathname = usePathname();
    return (
        <>
            <section className="sidebar">
                <nav className="flex flex-col gap-4">
                    <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
                        <Image src="/icons/logo.png" alt="mPitih Logo" width={64} height={64} className=""/>
                        <h1 className="sidebar-logo">mPitih</h1>
                    </Link>

                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route ||  pathname.startsWith(`${item.route}/`);
                        return (
                            <Link href={item.route} key={item.label} className={cn ('sidebar-link', {'bg-bankGradient': isActive})}> 
                                <div className="relative size-6">
                                    <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
                                </div>
                                <p className={cn ('sidebar-label', {'!text-white': isActive})}>
                                    {item.label}
                                </p>
                            </Link>
                        )
                    })}
                    USER
                </nav>
                <Footer user={user}/>
            </section>
        </>
    )
}
export default Sidebar;