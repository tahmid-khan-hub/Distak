"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "How does the temporary chat system work?",
    content:
      "Each chat is linked to a time-based plan. Once the selected duration ends, all messages and media are permanently deleted and cannot be recovered.",
  },
  {
    value: "item-2",
    trigger: "Is my conversation really end-to-end encrypted?",
    content:
      "Yes. Messages are encrypted on your device and can only be decrypted by the recipient. Even our servers cannot read or store your conversations.",
  },
  {
    value: "item-3",
    trigger: "What happens if I lose or share my token?",
    content:
      "Anyone with your token can access the chat. If you believe your token was exposed, generate a new one immediately to stay secure.",
  },
  {
    value: "item-4",
    trigger: "Can I extend the chat duration after it starts?",
    content:
      "Yes, you can extend the chat time before it expires by selecting a new plan. Once expired, the chat is permanently deleted.",
  },
  {
    value: "item-5",
    trigger: "Do you store any chat history or user data?",
    content:
      "No. We do not store chat history, metadata, or personal information. Everything is deleted automatically based on your selected plan.",
  },
];

const FaQ = () => {
  return (
    <div className="text-white ">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-190 mx-auto"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaQ;
