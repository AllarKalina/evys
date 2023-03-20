import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { useState } from "react";
import { urlPathname } from "../../stores/urlStore";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const $urlPathname = useStore(urlPathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemArray = [
    {
      id: 0,
      title: "Seltsist",
      href: "/info",
      subItems: [
        { id: 4, title: "Seltsist", href: "/info" },
        { id: 5, title: "Juhatus ja meeskonnad", href: "/info/teams" },
        { id: 6, title: "Dokumendid", href: "/info/documents" },
      ],
    },
    { id: 1, title: "Loomaarsti õpe", href: "/veterinary" },
    { id: 2, title: "Blogi", href: "/blog" },
    { id: 3, title: "Toetajad", href: "/sponsors" },
  ];

  const formatPageName = (page: string) => {
    switch (page) {
      case "info":
        return "Seltsist";
      case "documents":
        return "Dokumendid";
      case "teams":
        return "Meeskonnad";

      default:
        return "Seltsist";
    }
  };

  console.log($urlPathname);

  const isInfo = $urlPathname.split("/")[1] === "info";

  const pages = $urlPathname
    .split("/")
    .slice(1)
    .map((value, idx) => {
      return {
        name: value,
        href: idx < 1 ? value : "info/" + value,
        current: value,
      };
    });

  return (
    <section
      className={clsx(
        "page-header fixed left-1/2 z-50 flex max-w-screen-xl -translate-x-1/2 transform justify-between",
        isMobileMenuOpen && "top-0 mx-0 w-full bg-emerald-600 px-7 pt-7",
        !isMobileMenuOpen &&
          "top-3 w-[calc(100%-1.5rem)] rounded-xl bg-emerald-600/80 p-4 backdrop-blur md:w-[calc(100%-3rem)] lg:py-3"
      )}
    >
      <div className="flex w-full flex-col md:w-fit">
        <div className="flex w-full justify-between">
          <a href="/" data-turbo="false">
            <img
              src="/images/Logo.png"
              width={90}
              height={43}
              alt="Mobile logo"
            />
          </a>
          <MobileMenu
            isMenuOpen={isMobileMenuOpen}
            onMenuChange={() => {
              document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            menuItems={menuItemArray}
          />
        </div>
        {isInfo && !isMobileMenuOpen && (
          <>
            <div className="my-4 h-[1px] w-full bg-white/60 md:hidden" />
            <div className="w-full md:hidden">
              <nav className="flex" aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="flex items-center justify-start space-x-4"
                >
                  <li>
                    <div>
                      <a
                        href="/"
                        data-turbo="false"
                        className="text-white hover:text-zinc-300"
                      >
                        <HomeIcon
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Home</span>
                      </a>
                    </div>
                  </li>
                  {pages.map((page) => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon
                          className="h-5 w-5 flex-shrink-0 text-white"
                          aria-hidden="true"
                        />
                        <a
                          href={"/" + page.href}
                          className="ml-4 text-sm font-semibold text-white hover:text-zinc-300"
                          aria-current={page.current ? "page" : undefined}
                        >
                          {formatPageName(page.name)}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </>
        )}
      </div>
      <DesktopMenu menuItems={menuItemArray} />
    </section>
  );
};

export default Navbar;
