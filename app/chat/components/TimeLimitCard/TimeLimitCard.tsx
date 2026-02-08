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
        h-full rounded-xl border p-6 text-left flex flex-col justify-start transition-all duration-200
        ${
          selected
            ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(111,199,161,0.4)]"
            : "border-white/10 hover:border-primary/60"
        }
      `}
    >
        <h3 className="inter text-2xl font-semibold text-white mb-5">{label}</h3>
        <p className="poppins text-md text-gray-400">{description}</p>
    </button>
  );
};

export default TimeLimitCard;
