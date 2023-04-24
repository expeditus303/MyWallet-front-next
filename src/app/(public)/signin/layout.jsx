import { robotoMono } from "../../layout";

export const metadata = {
    title: 'Sign-in! - MyWallet',
  }

export default function AuthLayout({ children }) {
  return (
    <>
      <h1 className={`text-4xl mb-6 ${robotoMono.variable} font-mono`}>
        MyWallet
      </h1>
      {children}
    </>
  );
}
