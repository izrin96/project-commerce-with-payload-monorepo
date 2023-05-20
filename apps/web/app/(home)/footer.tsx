import React from "react";
import Logo from "./logo";

function Footer() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <div className="container">
        <div className="grid grid-cols-4 gap-3 py-12">
          <div>
            <Logo color="white" />
          </div>
          <div>
            <h1 className="font-semibold mb-4">Information</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>My account</li>
              <li>Track my order</li>
              <li>FAQs</li>
              <li>Payments method</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-4">Information</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>My account</li>
              <li>Track my order</li>
              <li>FAQs</li>
              <li>Payments method</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-4">Information</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>My account</li>
              <li>Track my order</li>
              <li>FAQs</li>
              <li>Payments method</li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-sm">
          &copy; {new Date().getFullYear()} Logoipsum.{" "}
          <span className="text-gray-400">All right reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
