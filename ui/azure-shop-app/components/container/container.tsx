import { uiDebug } from "@features/settings";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`max-w-7xl min-w-[320px] mx-auto px-3 ${className} ${uiDebug(
          false
        )}`}
      >
        {children}
      </div>
    </>
  );
};
