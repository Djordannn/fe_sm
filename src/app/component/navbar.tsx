import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  return (
    <div className="mx-[14%] flex items-center justify-between py-5">
      <div>
        <h2 className="text-2xl font-semibold">Logo</h2>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className={navigationMenuTriggerStyle()}>
                  Mobil
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="rounded-md p-2 text-sm hover:bg-zinc-50">
                    <Link href="/mobil/toyota">Toyota</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="rounded-md p-2 text-sm hover:bg-zinc-50">
                    <Link href="/mobil/honda">Honda</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="rounded-md p-2 text-sm hover:bg-zinc-50">
                    <Link href="/mobil/daihatsu">Daihatsu</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="rounded-md p-2 text-sm hover:bg-zinc-50">
                    <Link href="/mobil/suzuki">Suzuki</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/info">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Info
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Ketentuan
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kontak
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Administration
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
