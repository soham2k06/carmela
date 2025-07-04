import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={168}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carmela {currentYear} <br /> All right reserved &copy;
          </p>
        </div>
        <ul className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <li
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@{new Date().getFullYear()} Carmela. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
