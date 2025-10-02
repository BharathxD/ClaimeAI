import { SignIn as ClerkSignIn } from "@clerk/nextjs";

export const SignIn = () => (
  <div className="relative">
    <div className="absolute top-0 z-20 h-px w-full bg-gradient-to-r from-white/0 via-neutral-200 to-white/0" />
    <ClerkSignIn
      waitlistUrl="/auth/waitlist"
      appearance={{
        elements: {
          cardBox: "shadow-sm!",
          footer: "[&>div:last-child]:hidden! bg-red-500!",
        },
      }}
    />
  </div>
);
