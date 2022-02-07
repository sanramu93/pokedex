export const Button = ({ className, icon, label, onClick }) => {
  return (
    <button className={className || ""} onClick={onClick} className="button">
      {icon || label}
    </button>
  );
};
