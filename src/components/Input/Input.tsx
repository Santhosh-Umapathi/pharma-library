import { TProps } from "./types";

export const Input = ({ placeholder, value, onChange }: TProps) => {
  return (
    <input
      id="input"
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-lg border-2 border-bgSecondary bg-white focus:outline-none hover:border-buttonPrimary focus:border-buttonPrimary transition-colors duration-200 text-grey-800 placeholder:text-grey-500"
      value={value}
      onChange={onChange}
    />
  );
};
