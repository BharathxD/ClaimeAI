import { SignIn } from "@/components/auth/sign-in";

export type AuthType = "invite" | "sign-up" | "sign-in";

const SignInPage = async () => <SignIn />;

export default SignInPage;
