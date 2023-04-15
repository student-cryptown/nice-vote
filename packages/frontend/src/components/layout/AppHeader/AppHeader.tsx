import { TypographyH2 } from "@/components/ui"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu"
import { cn } from "@/utils"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export const AppHeader = () => {
  return (<div className="container mx-auto px-4 py-4 flex items-center">
    <div>
      <TypographyH2>
        Nice QV
      </TypographyH2>
    </div>
    <div className="flex-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), "cursor-pointer"])}>
              Open Votes
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), "cursor-pointer"])}>
              Finalized Votes
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div>
      <ConnectButton />
    </div>
  </div>)
}