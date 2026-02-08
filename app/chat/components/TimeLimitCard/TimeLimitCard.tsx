interface TimeLimitCardProps {
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

const TimeLimitCard = ({
  label,
  selected,
  value,
  onClick,
}: TimeLimitCardProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`
        rounded-xl border p-6 text-center transition-all duration-200
        ${
          selected
            ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(111,199,161,0.4)]"
            : "border-white/10 hover:border-primary/60"
        }
      `}
      >
        <p className="text-lg font-semibold text-white">{label}</p>
      </button>
    </div>
  );
};

export default TimeLimitCard;
