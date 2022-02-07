export const Button = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {icon || label}
    </button>
  );
};
