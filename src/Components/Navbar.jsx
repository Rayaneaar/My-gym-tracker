/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLinks, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  {
    /* Navbar object so adding new links can be easy */
  }
  const navLinks = [
    { name: "Home", id: "home", href: "#" },
    { name: "Discover", id: "discover", href: "#" },
    { name: "Test", id: "Test", href: "#" },
    { name: "Test", id: "Test", href: "#" },
  ];
  {
    /* Scrolling animation logic for navbar*/
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      {
        /* if the user scroll more than 20px the scrolled = true*/
      }

      const scrollPosition = window.scrollY;
      let currentSection = "";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          if (section.offsetTop <= scrollPosition + 150) {
            currentSection = link.name;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-96 py-2 md:top-4">
      <nav
        className={`flex justify-around mt-4  transition-all duration-500  items-center  w-full md:w-auto md:space-x-6 px-4 py-2 
        ${
          scrolled
            ? "bg-black/25 backdrop-blur-xl  md:rounded-full border-b md:border border-white/20 shadow-lg lg:transition-all duration-500"
            : "md:bg-transparent "
        }
      `}
      >
        <div className="flex">
          <img src="" alt="" className="mx-7" />
          <h1 className="mx-7 font-extrabold text-3xl tracking-tighter">
            Grind<span className="text-lime-500 ">Up</span>
          </h1> 
        </div>
        <div className="flex">
          <ul className="flex">
            {navLinks.map((link, k) => (
              <li
                className="mx-9 tracking-widest hover:text-lime-500 transition-all  duration-500"
                key={k}
              >
                <a href={`#${link.href}`} id={`#${link.id}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <h1 className="mx-7">Sign Up</h1>
          <h1 className="mx-7">Login</h1>
        </div>
      </nav>
    </header>
  );
}
