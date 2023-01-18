import { Section } from "@/components/section";

export const HeroSection = () => {
  return (
    <Section>
      <h5 className="bg-gradient-to-r from-orange-500 to-purple-500 inline-block bg-clip-text text-transparent mb-6">
        Azure Container Apps
      </h5>
      <h3 className="display-3 ">Serverless containers for microservices</h3>
      <h3 className="text-slate-400">
        Micro Frontends and Micro Services for scalable, modular development
      </h3>
    </Section>
  );
};
