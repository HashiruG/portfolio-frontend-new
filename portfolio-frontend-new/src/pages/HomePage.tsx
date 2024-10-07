import AboutSection from "@/components/sections/home/AboutSection";
import SkillsSection from "@/components/sections/home/SkillsSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import ContactSection from "@/components/sections/home/ContactSection";
import ChatUI from "@/components/sections/home/ChatUI";

const HomePage = () => {
  
  return (
    <>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <ChatUI></ChatUI>
    </>
  );
}

export default HomePage;
