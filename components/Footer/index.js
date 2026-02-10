import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-20 p-2 laptop:p-0">
        <div>
          <div className="mt-5 laptop:mt-6">
            {/* Let's Connect image - centered */}
            <div className="flex justify-center mb-6">
              <div className="w-[60%] max-w-[500px] tablet:max-w-[600px] laptop:max-w-[700px]">
                <Image
                  src="/images/letsconnect.png"
                  alt="Let's Connect"
                  width={700}
                  height={150}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Full-bleed Socials with updated background color */}
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#bfb6ad] flex justify-center py-4">
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-xs tablet:text-sm text-center opacity-80 w-full">
        Made With ❤ by{" "}
        <Link href="https://www.linkedin.com/in/fiona-leung1134/">
          <a className="underline underline-offset-2 hover:opacity-100 transition">
            Fiona Leung
          </a>
        </Link>
      </h1>

    </>
  );
};

export default Footer;