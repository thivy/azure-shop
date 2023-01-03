import { Panel } from "@/components/panel";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
      <Section>
        <h5 className="bg-gradient-to-r from-orange-500 to-purple-500 inline-block bg-clip-text text-transparent mb-6">
          Azure Container Apps
        </h5>
        <h3 className="display-3 ">Serverless containers for microservices</h3>
        <h3 className="text-slate-400">
          Micro Frontends and Micro Services for scalable, modular development
        </h3>
      </Section>
      <Section>
        <div className="grid grid-cols-3 grid-flow-row gap-6">
          <Panel className="" />
          <Panel className="col-span-2" />
        </div>
      </Section>
      <Section>
        <h5 className="mb-6 text-purple-600">Features</h5>
        <h3 className="display-3">Build modular applications</h3>
      </Section>
      <Section>
        <div className="grid grid-cols-3 grid-flow-row gap-6">
          <Panel className="" />
          <Panel className="" />
          <Panel className="" />
        </div>
      </Section>
    </>
  );
}
