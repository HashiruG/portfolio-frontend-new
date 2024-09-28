import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationCustomized(props) {
  return (
    <nav className="flex justify-between p-5">
      <div>
        <h1 className="text-5xl font-protest">{props.logo}</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {props.navItems.map((navItem) => (
             <NavigationMenuItem>
             <a href={navItem.href}>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                 <h2 className="text-xl">{navItem.description}</h2>
               </NavigationMenuLink>
             </a>
           </NavigationMenuItem>
          ))}
         
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
