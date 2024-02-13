import { getAuthSession } from "@/utils/auth";
import Cart from "./buttons/cart";
import Logout from "./buttons/logout";
import SignInButton from "./buttons/signin";
import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

export default async function RootNavbar() {
  const session = await getAuthSession();

  return (
    <nav className="fixed top-0 z-10 w-full px-1 py-1 border bg-white shadow-slate-400">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="Home" width={55} />
        </Link>
        <div className="flex items-center gap-4">
          <span>
            <Cart />
          </span>
          <span>{session ? <Logout /> : <SignInButton />}</span>
        </div>
      </div>
    </nav>
  );
}
