"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

interface MobileNavProps {
    user: User
}

const MobileNav = ( {user}: MobileNavProps ) => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center">
                <Image 
                    src="/icons/hamburger.svg" 
                    alt="Hamburger Menu" 
                    width={24} 
                    height={24} 
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side="right" className="p-2 bg-white border-none">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
                    <Image src="/icons/logo.png" alt="mPitih Logo" width={64} height={64}/>
                    <h1 className="font-goldman font-black text-logo text-2xl">mPitih</h1>
                </Link>

                <div className="mobilenav-sheet">
                    <SheetClose asChild>
                        <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route ||  pathname.startsWith(`${item.route}/`);
                                return (
                                    <SheetClose asChild key={item.route}>
                                        <Link href={item.route} key={item.label} className={cn ('mobilenav-sheet_close w-full', {'bg-bankGradient': isActive})}> 
                                            <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({'brightness-[3] invert-0': isActive})}/>
                                            <p className={cn ('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                                                {item.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                            USER
                        </nav>
                    </SheetClose>
                    <Footer user={user} type="mobile"/>
                </div>
            </SheetContent>
        </Sheet>
    )
}
 
export default MobileNav;