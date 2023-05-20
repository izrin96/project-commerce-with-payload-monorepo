import React from "react";
import Logo from "./logo";
import { NavigationMenuDemo } from "./navigation";
import Footer from "./footer";
import Link from "next/link";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container flex flex-col mb-8">
        <div className="flex justify-between items-center px-6 py-3">
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div>
            <NavigationMenuDemo />
          </div>
          <div>User</div>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default HomeLayout;
