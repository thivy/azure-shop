export const Button = (
  prosp: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      type="button"
      className="bg-purple-600/40 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90"
      {...prosp}
    >
      {prosp.children}
    </button>
  );
};
