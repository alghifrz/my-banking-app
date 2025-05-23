'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUp, signIn, getLoggedInUser } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const formSchema = authFormSchema(type)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            if (type === "register") {
                console.log(values)
                const newUser = await signUp(values);
                setUser(newUser)
            } 
             else if (type === "login") {
                const response = await signIn({
                    email: values.email,
                    password: values.password
                })
                if (response) {
                    router.push("/")
                }
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <section className="auth-form">
                <header className="flex flex-col gap-5 md:gap-8">
                    <Link href="/" className="flex cursor-pointer items-center gap-1 justify-center">
                        <Image 
                            src="/icons/logo.png" 
                            alt="mPitih Logo" 
                            width={64} 
                            height={64} 
                            sizes="100vw"
                            className="w-16 h-16"
                        />
                        <h1 className="font-goldman font-black text-logo text-5xl">mPitih</h1>
                    </Link>

                    <div className="flex flex-col gap-1 md:gap-3 justify-center items-center">
                        <h1 className="text-24 lg:text-36 font-semibold text-gray-900 text-center">
                            {user 
                                ? 'Link Account'
                                : type === 'login'
                                    ? 'Login'
                                    : 'Register'
                            }
                            <p className="text-16 font-normal text-gray-600">
                                {user 
                                    ? 'Link your account to continue'
                                    : 'Please enter your details'
                                }
                            </p>
                        </h1>
                    </div>

                </header>

                {user ? (
                    <div className="flex flex-col gap-4">

                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                {type === 'register' && (
                                    <>
                                        <div className="flex gap-4 w-full">
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="firstName" label="First Name" placeholder="ex. Alghif"  />
                                            </div>
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="lastName" label="Last Name" placeholder="ex. Rz" />
                                            </div>
                                        </div>
                                        <CustomInput control={form.control} name="address" label="Address" placeholder="Enter your specific address" />
                                        <CustomInput control={form.control} name="province" label="Province" placeholder="ex. DKI Jakarta" />
                                        <div className="flex gap-4 w-full">
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="city" label="City" placeholder="ex. South Jakarta" />
                                            </div>
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder="ex. 12345" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 w-full">
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="dateOfBirth" label="Date of Birth" placeholder="ex. 2001-01-01" />
                                            </div>
                                            <div className="w-1/2">
                                                <CustomInput control={form.control} name="nik" label="NIK" placeholder="must be 16 digits" />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" />
                                <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" />
                                <div className="flex flex-col gap-4">
                                    <Button type="submit" className="form-btn" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" /> 
                                                &nbsp;Loading...
                                            </>
                                        ) : type === 'login' 
                                            ? 'Login' : 'Register'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </Form>
                        <footer className="flex justify-center gap-1">
                            <p>
                                {type === 'login' ? (
                                    <>
                                        Don't have an account? <Link href="/register" className="form-link">Register</Link>
                                    </>
                                ) : (
                                    <>
                                        Already have an account? <Link href="/login" className="form-link">Login</Link>
                                    </>
                                )}
                            </p>
                        </footer>
                    </>
                )}

            </section>
        </>
    );
}

export default AuthForm;