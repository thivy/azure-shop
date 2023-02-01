import { Panel } from "@components/panel";
import { PanelLine } from "@components/panel/panel";
import { Section } from "@components/section";

export const ArchitectureSection = () => {
  return (
    <>
      <Section>
        <h5 className="mb-6 text-purple-600">Azure Container Apps Features</h5>
        <h3 className="display-4">Build modular applications</h3>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-3 grid-flow-row gap-6 md:grid-cols-2 sm:grid-cols-1">
          <Panel className="bg-gradient-to-b from-slate-800/50 to-orange-500/20">
            <h2 className="text-orange-500">
              Build modern apps on open source
            </h2>
            <PanelLine>
              App portability powered by open standards and APIs
            </PanelLine>
            <PanelLine>
              App patterns and best practices encapsulated by products like Dapr
            </PanelLine>
            <PanelLine>
              Service capabilities influenced by OSS contributions
            </PanelLine>
            <PanelLine>
              Benefit from streamlined application lifecycle for upgrades and
              versioning, traffic shifting, service discovery, and monitoring.
            </PanelLine>
          </Panel>
          <Panel className="bg-gradient-to-b from-slate-800/50 to-purple-500/20">
            <h2 className="text-purple-500">
              Focus on apps, not infrastructure
            </h2>
            <PanelLine>
              Apps with any development stack, any Linux container image
            </PanelLine>
            <PanelLine>No opinionated programming model</PanelLine>
            <PanelLine>High productivity development experience</PanelLine>
            <PanelLine>
              Set up a code-to-cloud pipeline using GitHub Actions.
            </PanelLine>
          </Panel>
          <Panel className="bg-gradient-to-b from-slate-800/50 to-green-500/20">
            <h2 className="text-green-500">
              Scale dynamically based on events
            </h2>
            <PanelLine>
              Serverless autoscale based on HTTP requests, KEDA event scale
              triggers, or CPU and Memory
            </PanelLine>
            <PanelLine>
              Declarative scaling rules eliminate the need to manage complex
              infrastructure
            </PanelLine>
            <PanelLine>Scale to 0 and pay per use by second</PanelLine>
          </Panel>
        </div>
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
