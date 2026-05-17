import About from "@/components/About";
import Journey from "@/components/Journey";
import SkillRadar from "@/components/SkillRadar";
import PersonalInfo from "@/components/PersonalInfo";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <About />
      <SkillRadar />
      <Journey />
      <PersonalInfo />
    </div>
  );
}
