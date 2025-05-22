import Sidebar from "@/components/Sidebar";

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Alghif", lastName: "Rz" };
  return (
    <main className="flex h-screen w-full">
        <Sidebar user={loggedIn}/>
        {children}
    </main>
  );
}
