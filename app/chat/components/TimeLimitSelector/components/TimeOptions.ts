export interface TimeOption {
  label: string;
  value: string;
  description: string;
}

export const timeOptions: TimeOption[] = [
  {
    label: "2 Hours",
    value: "2h",
    description:
      "All messages will be permanently deleted after 2 hours. This action cannot be undone.",
  },
  {
    label: "6 Hours",
    value: "6h",
    description:
      "Your chat history will be removed after 6 hours with no recovery option.",
  },
  {
    label: "24 Hours",
    value: "24h",
    description:
      "Messages will stay available for 24 hours and will be deleted automatically after.",
  },
  {
    label: "No Deletion",
    value: "keep",
    description:
      "Your messages will remain available unless you manually delete the chat.",
  },
];
