import { RequestButton } from "../RequestButton";
import { TProps } from "./types";

export const HeaderSection = ({ title, description }: TProps) => {
  return (
    <>
      <header
        id="header"
        className="flex flex-col items-center justify-center w-full"
      >
        <span className="text-6xl font-bold">{title}</span>
        <span className="text-xl mt-8">{description}</span>
      </header>
      <RequestButton />
    </>
  );
};
