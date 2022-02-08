export const Button = ({ icon, label, onClick, isActive, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${isActive ? "btn-active" : ""}`}
      disabled={isDisabled}
    >
      {icon || label}
    </button>
  );
};
