import { HeaderButton } from "@components/header";
import { HeadingSection } from "@components/section/section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadingSection>
        <h3 className="display-3 col-span-4">Demo</h3>
      </HeadingSection>

      <div className="flex gap-3">
        <HeaderButton href="/demo/tab1" icon="/store.svg" name="Tab 1" />
        <HeaderButton href="/demo/tab2" icon="/demo.svg" name="Tab 2" />
      </div>
      {children}
    </>
  );
}
