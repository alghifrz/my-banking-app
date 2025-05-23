import { logoutAccount } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Footer = ({ user, type }: FooterProps) => {
    const router = useRouter();
    const handleLogout = async () => {
        await logoutAccount();
        router.push("/login");
    }
    return (
        <>
            <footer className="footer">
                <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
                    <p className="text-xl font-bold text-gray-700">
                        {user?.name?.[0] || '?'}
                    </p>
                </div>
                <div className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
                    <h1 className="text-14 truncate font-semibold text-gray-600">
                        {user?.name || 'Guest'}
                    </h1>
                    <p className="text-12 text-gray-600">
                        {user?.email || 'No email'}
                    </p>
                </div>
                <div className="footer_image" onClick={handleLogout}>
                    <Image 
                        src="/icons/logout.svg" 
                        alt="Logout" 
                        width={24} 
                        height={24} 
                        className="cursor-pointer"
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer;