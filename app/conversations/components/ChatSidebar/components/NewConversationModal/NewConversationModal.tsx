"use client";
import UseAxiosSecure from "@/app/hooks/UseAxiosSecure";
import { useSession } from "@/app/hooks/useSession";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, } from "@/components/ui/dialog";
import { ConversationResponse, FoundUser } from "@/types/chat";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ConversationModalFeedback from "./ConversationModalFeedback";

export default function NewConversationModal({ open, setOpen, }: {
  open: boolean; setOpen: (open: boolean) => void; }) {

  const { data: session } = useSession();
  const [token, setToken] = useState("");
  const [foundUser, setFoundUser] = useState<FoundUser | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const axiosSecure = UseAxiosSecure();

  // search by token
  const { mutate: handleSearch, isPending: isSearching } = useMutation({
    mutationFn: async (token: string) => {
      const res = await axiosSecure.get(`/api/chat/search/${token}`)
      return res.data as FoundUser
    },
    onSuccess: (user) => { setFoundUser(user) },
    onError: () => { setSearchError("No user found with this token") }
  })

  // create/get conversation
  const { mutate: startConversation, isPending: isStarting } = useMutation({
    mutationFn: async (targetUserId: string) => {
      const res = await axiosSecure.post(`/api/chat`, { targetUserId })
      return res.data as ConversationResponse
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
      setToken("");
      setFoundUser(null);
      setOpen(false);
    },
  })
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-black border-gray-500 text-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-5">Start New Conversation</DialogTitle>
          <DialogDescription className="text-lg">Enter a valid token</DialogDescription>
        </DialogHeader>

        <input value={token} onChange={(e) => setToken(e.target.value) }
        placeholder="ex:GrrABddYrLHUSGoa" className="p-2 border rounded-md mb-5"/>

        <ConversationModalFeedback
          isSelf={session?.token === token}
          searchError={searchError}
          foundUser={foundUser}
          isStarting={isStarting}
          onStartConversation={startConversation}
        />

        <DialogFooter>
          <Button disabled={ isSearching || !token.trim() || session?.token === token } onClick={ () => handleSearch(token) }>
            {isSearching ? "Searching..." : "Enter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
