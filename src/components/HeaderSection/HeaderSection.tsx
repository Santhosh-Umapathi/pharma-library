import { RequestButton } from "@/components/RequestButton";
import { TProps } from "./types";
import { Logo } from "@/components/Logo";

export const HeaderSection = ({ title, description }: TProps) => {
  return (
    <>
      <Logo />
      <header
        id="header"
        className="flex flex-col items-center justify-center w-full"
      >
        <span
          className="font-bold
        text-4xl
        sm:text-5xl
        md:text-6xl
        "
        >
          {title}
        </span>
        <span
          className="
          text-base mt-2
        sm:text-lg sm:mt-4
        md:text-xl md:mt-8
        "
        >
          {description}
        </span>
      </header>
      <RequestButton />
    </>
  );
};
