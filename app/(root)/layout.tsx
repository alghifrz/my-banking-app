import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Alghif", lastName: "Rz" };
  return (
    <main className="flex h-screen w-full">
        <Sidebar user={loggedIn}/>
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
