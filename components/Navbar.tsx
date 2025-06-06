import Link from "next/link";
import Image from "next/image";
import NavItems from "./navItems";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <div className="flex items-center gap-3">
            <SignInButton>
              <button className="btn btn-secondary">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="btn btn-primary">Sign Up</button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
