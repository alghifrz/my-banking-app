import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      {/* Left side - Auth Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Right side - Decorative */}
      <div className="hidden lg:flex lg:flex-1 relative">
        <Image 
          src="/icons/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-800/90" />
        <div className="relative flex flex-col justify-center items-center text-center px-12 py-12">
          <div className="flex items-center gap-4 mb-12">
            <Image 
              src="/icons/logo.png" 
              alt="mPitih Logo" 
              width={80} 
              height={80}
              className="brightness-[3]"
            />
            <h1 className="font-goldman font-black text-6xl text-white">mPitih</h1>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to mPitih
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl">
            Your trusted partner in digital banking. Experience seamless transactions and secure financial management.
          </p>
          <div className="grid grid-cols-2 gap-8 max-w-3xl">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Image 
                  src="/icons/shield-check.svg"
                  alt="Security"
                  width={32}
                  height={32}
                  className="brightness-[3]"
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Secure Transactions</h3>
              <p className="text-white/80">Bank-level security for all your transactions with end-to-end encryption</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Image 
                  src="/icons/rocket.svg"
                  alt="Fast"
                  width={32}
                  height={32}
                  className="brightness-[3]"
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Lightning Fast</h3>
              <p className="text-white/80">Instant transfers and real-time updates for all your banking needs</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Image 
                  src="/icons/chart.svg"
                  alt="Analytics"
                  width={32}
                  height={32}
                  className="brightness-[3]"
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Smart Analytics</h3>
              <p className="text-white/80">Track your spending and get insights to manage your finances better</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Image 
                  src="/icons/globe.svg"
                  alt="Global"
                  width={32}
                  height={32}
                  className="brightness-[3]"
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Global Access</h3>
              <p className="text-white/80">Access your account from anywhere in the world, anytime</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  