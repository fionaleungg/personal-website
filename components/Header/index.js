import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-20 block tablet:hidden">
        <Popover className="w-full bg-[#d4cdc7]">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between px-4 py-2">
                <div
                  onClick={() => router.push("/")}
                  className="cursor-pointer flex items-center"
                >
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/images/f_logo.png"
                      alt="F Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {data.darkMode && mounted && (
                    <Button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <img
                        className="h-6"
                        src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                        alt="Theme Toggle"
                      />
                    </Button>
                  )}

                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`/images/${
                        !open
                          ? theme === "dark"
                            ? "menu-white.svg"
                            : "menu.svg"
                          : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`}
                      alt="Menu Toggle"
                    />
                  </Popover.Button>
                </div>
              </div>

              <Popover.Panel
                className={`absolute right-0 z-10 w-full p-4 ${
                  theme === "dark" ? "bg-slate-800" : "bg-[#d4cdc7]"
                } shadow-md rounded-md`}
              >
                {!isBlog ? (
                  <div className="grid grid-cols-1 gap-2">
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
                    {showResume && <Button onClick={() => window.open("mailto:fionaleung1134@gmail.com")}>Resume</Button>}
                    <Button onClick={() => window.open("mailto:fionaleung1134@gmail.com")}>Contact</Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-2">
                    <Button onClick={() => router.push("/")}>Home</Button>
                    {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
                    {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
                    <Button onClick={() => window.open("mailto:fionaleung1134@gmail.com")}>Contact</Button>
                  </div>
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>

      {/* Desktop Header */}
      <div className="fixed left-0 right-0 top-0 z-20 hidden tablet:flex">
        <div className="w-full bg-[#d4cdc7] px-6 py-4 flex items-center justify-between">
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer flex items-center"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/images/f_logo.png"
                alt="F Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {!isBlog ? (
            <div className="flex items-center gap-2">
              <Button onClick={handleAboutScroll}>About</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
              <Button onClick={() => window.open("mailto:fionaleung1134@gmail.com")}>Contact</Button>

              {mounted && theme && data.darkMode && (
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    alt="Theme Toggle"
                  />
                </Button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={() => router.push("/")}>Home</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
              <Button onClick={() => window.open("mailto:fionaleung1134@gmail.com")}>Contact</Button>

              {mounted && theme && data.darkMode && (
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    alt="Theme Toggle"
                  />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;