import { MdOutlineInbox } from "react-icons/md";

export default function NoConversation() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-10 px-4 text-center text-gray-300 poppins">
      <div>
        <MdOutlineInbox className="h-12 w-12 text-gray-200" />
      </div>
      <p className="mt-5">
        No conversations yet
      </p>
      <p className="text-xs">
        Click <span className="font-semibold text-primary">New</span> or search by token to start
      </p>
    </div>
  );
}
