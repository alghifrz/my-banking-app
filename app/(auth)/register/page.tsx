import AuthForm from "@/components/AuthForm";

const Register = async () => {
    return (
        <>
            <section className="flex-center size-fulll max-sm:px-6">
                <AuthForm
                    type="register"
                />
            </section>
        </>
    );
}

export default Register;