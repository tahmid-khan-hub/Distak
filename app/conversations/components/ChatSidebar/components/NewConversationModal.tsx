"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function NewConversationModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-black border-gray-500 text-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-5">Start New Conversation</DialogTitle>
          <DialogDescription className="text-lg">Enter a valid token</DialogDescription>
        </DialogHeader>

        <input placeholder="ex:GrrABddYrLHUSGoa" className="p-2 border rounded-md mb-5"/>

        <DialogFooter>
          <Button>
            Enter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
