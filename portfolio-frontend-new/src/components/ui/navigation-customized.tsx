import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  logo: string;
  navItems: { href: string; description: string }[];
}

export default function NavigationCustomized(props: NavigationProps) {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScroll]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-5 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify center md:justify-between items-center">
        <h1 className="md:block hidden text-5xl font-protest">{props.logo}</h1>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {props.navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.href}>
                <a href={navItem.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <h2 className="text-xl">{navItem.description}</h2>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
