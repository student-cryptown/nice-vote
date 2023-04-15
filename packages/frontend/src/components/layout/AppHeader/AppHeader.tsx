import { Button, TypographyP } from "@/components/ui"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu"
import { cn } from "@/utils"

export const AppHeader = () => {
  return (<div className="container mx-auto px-2 py-4 flex items-center">
    <div>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Nice QV
      </h2>
    </div>
    <div className="flex-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), "cursor-pointer"])}>
              Open Voting
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div>
      <Button className="bg-blue-500" >
        <TypographyP>Connect Wallet</TypographyP>
      </Button>
    </div>
  </div>)
}