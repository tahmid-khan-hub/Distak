import { Button } from "@/components/ui/button";
import { FoundUser } from "@/types/chat";

interface ConversationModalFeedbackProps {
  isSelf: boolean;
  searchError: string | null;
  foundUser: FoundUser | null;
  isStarting: boolean;
  onStartConversation: (id: string) => void;
}

export default function ConversationModalFeedback({ isSelf, searchError, foundUser, isStarting, onStartConversation }: ConversationModalFeedbackProps) {
  return (
    <>
      {isSelf && (
        <p className="text-lg font-semibold text-red-500 -mt-5">
          You cannot start a conversation with yourself
        </p>
      )}

      {searchError && (
        <p className="text-lg font-semibold text-red-500 -mt-5">{searchError}</p>
      )}

      {foundUser && (
        <div className="flex items-center justify-between p-3 border border-gray-600 rounded-md mb-3">
          <p className="text-gray-200">{foundUser.nickname}</p>
          <Button size="sm" disabled={isStarting} onClick={() => onStartConversation(foundUser.id)}>
            {isStarting ? "Starting..." : "Start Chat"}
          </Button>
        </div>
      )}
    </>
  )
}