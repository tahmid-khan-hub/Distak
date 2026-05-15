interface TimeLimitCardProps {
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
  description?: string;
}

const TimeLimitCard = ({
  label,
  selected,
  onClick,
  description
}: TimeLimitCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        h-full border-l border-l-primary bg-neutral-900 rounded-xl p-6 text-left flex flex-col justify-start transition-all duration-200
        ${
          selected
            ? "bg-primary/10 "
            : ""
        }
      `}
    >
        <h3 className="inter text-2xl font-semibold text-gray-200 mb-5">{label}</h3>
        <p className="poppins text-md text-gray-300">{description}</p>
    </button>
  );
};

export default TimeLimitCard;
