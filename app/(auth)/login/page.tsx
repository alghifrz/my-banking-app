import AuthForm from "@/components/AuthForm";

const Login = () => {
    return (
        <>
            <section className="flex-center size-fulll max-sm:px-6">
                <AuthForm
                    type="login"
                />
            </section>
        </>
    );
}

export default Login;