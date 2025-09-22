import { Button } from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import { Wallet } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/atoms/Avatar";
import { useConnect } from "wagmi";
import { useSidebar } from "@/features/hooks/context/useSidebar";
import { SidebarMenuButton } from "@/components/atoms/Sidebar";

export function WalletConnectDialogButton() {
  const { connectors, connect } = useConnect();
  const { state } = useSidebar();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {state == "collapsed" ? (
          <SidebarMenuButton tooltip="Connect Wallet">
            <Wallet />
          </SidebarMenuButton>
        ) : (
          <SidebarMenuButton className="w-full">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">
                <Wallet />
              </AvatarFallback>
            </Avatar>
            <span className="ml-2">Connect Wallet</span>
          </SidebarMenuButton>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            {connectors.map((connector) => (
              <Button key={connector.id} onClick={() => connect({ connector })}>
                {connector.icon && (
                  <img
                    src={connector.icon}
                    alt={connector.name}
                    className="h-5 w-5 mr-2 inline"
                  />
                )}
                {connector.name}
              </Button>
            ))}
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
