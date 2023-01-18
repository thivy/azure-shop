import { Panel } from "@/components/panel";
import { Section } from "@/components/section";

export const ArchitectureSection = () => {
  return (
    <>
      <Section>
        <h5 className="mb-6 text-purple-600">Features</h5>
        <h3 className="display-3">Build modular applications</h3>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-1 grid-flow-row gap-6 md:grid-cols-2 sm:grid-cols-1">
          <Panel className="">
            <img src="./high-level-architecture.svg" />
          </Panel>
        </div>
      </Section>
    </>
  );
};
