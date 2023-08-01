interface ActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const ActionButton = ({
  icon,
  onClick,
  className = '',
}: ActionButtonProps) => {
  return (
    <button
      className={`rounded border border-solid border-white bg-black p-[0.6rem] ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}