"use client";
import UseAxiosSecure from "@/app/hooks/UseAxiosSecure";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, } from "@/components/ui/dialog";
import { ConversationResponse, FoundUser } from "@/types/chat";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function NewConversationModal({ open, setOpen, }: {
  open: boolean; setOpen: (open: boolean) => void; }) {

  const [token, setToken] = useState("");
  const [foundUser, setFoundUser] = useState<FoundUser | null>(null);
  const queryClient = useQueryClient();
  const axiosSecure = UseAxiosSecure();

  // search by token
  const { mutate: handleSearch, isPending: isSearching } = useMutation({
    mutationFn: async (token: string) => {
      const res = await axiosSecure.get(`/api/chat/search/${token}`)
      return res.data as FoundUser
    },
    onSuccess: (user) => {
      setFoundUser(user)
    },
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

        <input value={token} onChange={(e) => setToken(e.target.value)} 
        placeholder="ex:GrrABddYrLHUSGoa" className="p-2 border rounded-md mb-5"/>

        {/* Show found user */}
        {foundUser && (
          <div className="flex items-center justify-between p-3 border border-gray-600 rounded-md mb-3">
            <p className="text-gray-200">{foundUser.nickname}</p>
            <Button
              size="sm"
              disabled={isStarting}
              onClick={() => startConversation(foundUser.id)}
            >
              {isStarting ? "Starting..." : "Start Chat"}
            </Button>
          </div>
        )}

        <DialogFooter>
          <Button disabled={isSearching || !token.trim()} onClick={ () => handleSearch(token) }>
            {isSearching ? "Searching..." : "Enter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
