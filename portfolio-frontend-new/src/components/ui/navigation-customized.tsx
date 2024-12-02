import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"; 
import { Menu, X } from "lucide-react"; 

interface NavigationProps {
  logo: string;
  navItems: { href: string; description: string }[];
}

export default function NavigationCustomized(props: NavigationProps) {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 md:p-5">
        <h1 className="text-2xl md:text-5xl font-protest">{props.logo}</h1>

        <div className="md:hidden">
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-4">
            {props.navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.href}>
                <a href={navItem.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <h2 className="text-lg">{navItem.description}</h2>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col space-y-4">
            {props.navItems.map((navItem) => (
              <li key={navItem.href}>
                <a
                  href={navItem.href}
                  onClick={() => setMenuOpen(false)} 
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  {navItem.description}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
