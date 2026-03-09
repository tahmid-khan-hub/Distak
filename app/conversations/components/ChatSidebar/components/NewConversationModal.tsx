"use client";
import UseAxiosSecure from "@/app/hooks/UseAxiosSecure";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, } from "@/components/ui/dialog";
import { Conversation } from "@/types/chat";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function NewConversationModal({ open, setOpen, }: {
  open: boolean; setOpen: (open: boolean) => void; }) {

  const [token, setToken] = useState("");
  const queryClient = useQueryClient();
  const axiosSecure = UseAxiosSecure();

  const { mutate, isPending } = useMutation({
    mutationFn: async (token: string) => {
      const res = await axiosSecure.get(`/api/chat/search/${token}`)
      return res.data as Conversation
    },
    onSuccess: (user) => {
      queryClient.setQueryData<Conversation[]>(["conversations"], (old = []) => {
        const exists = old.find((u) => u.id === user.id)
        if (exists) return old;
        return [user, ...old];
      })
      setToken("");
      setOpen(false);
    },
  })

  const handleSearch = (token: string) => {
    if(!token.trim()) return;
    mutate(token);
  }
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-black border-gray-500 text-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-5">Start New Conversation</DialogTitle>
          <DialogDescription className="text-lg">Enter a valid token</DialogDescription>
        </DialogHeader>

        <input value={token} onChange={(e) => setToken(e.target.value)} 
        placeholder="ex:GrrABddYrLHUSGoa" className="p-2 border rounded-md mb-5"/>

        <DialogFooter>
          <Button disabled={isPending} onClick={ () => handleSearch(token) }>
            {isPending ? "Searching..." : "Enter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
