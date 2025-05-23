import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  return (
    <main className="flex h-screen w-full">
        <Sidebar user={loggedIn || {}}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
              src="/icons/logo.png" 
              alt="mPitih Logo" 
              width={30} 
              height={30} 
              className="size-8 sm:size-10"
            />
            <MobileNav user={loggedIn}/>
          </div>
          {children}
        </div>
    </main>
  );
}
