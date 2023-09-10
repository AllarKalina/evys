import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface Props {
  url: string;
}

const Navbar: React.FC<Props> = ({ url }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemArray = [
    {
      id: 0,
      title: "Seltsist",
      href: "/info/",
      subItems: [
        { id: 4, title: "Seltsist", href: "/info/" },
        { id: 5, title: "Juhatus ja meeskonnad", href: "/info/teams/" },
        { id: 6, title: "Kuusepuude projekt", href: "/info/work/" },
        { id: 7, title: "Dokumendid", href: "/info/documents/" },
      ],
    },
    { id: 1, title: "Loomaarsti õpe", href: "/veterinary/" },
    { id: 2, title: "Blogi", href: "/blog/" },
    { id: 3, title: "Toetajad", href: "/sponsors/" },
  ];

  const formatPageName = (page: string) => {
    switch (page) {
      case "info":
        return "Seltsist";
      case "documents":
        return "Dokumendid";
      case "teams":
        return "Meeskonnad";
      case "work":
        return "Kuusepuude projekt";

      default:
        return null;
    }
  };

  const pages = url
    .split("/")
    .slice(1)
    .map((value, idx) => {
      if (value === "") return;
      return {
        name: value,
        href: idx < 1 ? value : "/info/" + value,
        current: value,
      };
    })
    .filter((page) => page !== undefined);

  return (
    <header
      id="header"
      className={clsx(
        "page-header fixed left-1/2 z-50 flex max-w-screen-xl -translate-x-1/2 transform justify-between",
        isMobileMenuOpen && "top-0 mx-0 w-full bg-emerald-600 px-7 pt-7",
        !isMobileMenuOpen &&
          "top-3 w-[calc(100%-1.5rem)] rounded-xl bg-emerald-600/80 p-4 backdrop-blur md:w-[calc(100%-3rem)] lg:py-3"
      )}
    >
      <section className="flex w-full flex-col md:w-fit">
        <div className="flex w-full justify-between">
          <nav className="max-w-[80px]">
            <a href="/">
              <img
                  src="/images/MobileLogo.svg"
                  width={546}
                  height={340}
                  alt="Mobile logo"
                  className="object-cover"
              />
            </a>
          </nav>
          <MobileMenu
            isMenuOpen={isMobileMenuOpen}
            onMenuChange={() => {
              document.body.style.overflow = !isMobileMenuOpen
                ? "hidden"
                : "auto";
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            menuItems={menuItemArray}
          />
        </div>
        {!isMobileMenuOpen && (
          <div id="info-nav" className="hidden w-full flex-col">
            <div className="my-4 h-[1px] w-full bg-white/60 md:hidden" />
            <div className="w-full md:hidden">
              <nav className="flex" aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="flex items-center justify-start space-x-4"
                >
                  <li>
                    <div>
                      <a href="/" className="text-white hover:text-zinc-300">
                        <HomeIcon
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Home</span>
                      </a>
                    </div>
                  </li>
                  {pages.length > 0 &&
                    pages.map((page) => (
                      <li key={page?.name}>
                        <div className="flex items-center">
                          <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <a
                            href={"/" + page?.href}
                            className="ml-4 text-sm font-semibold text-white !no-underline hover:text-zinc-300"
                            aria-current={page?.current ? "page" : undefined}
                          >
                            {formatPageName(page?.name!)}
                          </a>
                        </div>
                      </li>
                    ))}
                </ol>
              </nav>
            </div>
          </div>
        )}
      </section>
      <DesktopMenu menuItems={menuItemArray} url={url} />
    </header>
  );
};

export default Navbar;
