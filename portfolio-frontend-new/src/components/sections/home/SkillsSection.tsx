import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [programmingSkills, setProgrammingSkills] = useState([]);
  const [webSkills, setWebSkills] = useState([]);
  const [mlSkills, setMlSkills] = useState([]);

  const fetchProgrammingSkills = async () => {
    try {
      const response = await fetch("http://localhost:8000/programming_skills");
      const data = await response.json();
      setProgrammingSkills(data);
    } catch (error) {
      console.error("Error fetching programming skills:", error);
    }
  };

  const fetchWebSkills = async () => {
    try {
      const response = await fetch("http://localhost:8000/web");
      const data = await response.json();
      setWebSkills(data);
    } catch (error) {
      console.error("Error fetching web skills:", error);
    }
  };

  const fetchMlSkills = async () => {
    try {
      const response = await fetch("http://localhost:8000/ml");
      const data = await response.json();
      setMlSkills(data);
    } catch (error) {
      console.error("Error fetching ML skills:", error);
    }
  };

  useEffect(() => {
    fetchProgrammingSkills();
    fetchWebSkills();
    fetchMlSkills();
  }, []);

  return (
    <>
      <section
        id="skills"
        className="flex flex-col items-center justify-center h-auto min-h-screen"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 md:mb-10 md:mt-2 mt-20">
          My Skills
        </h1>

        <div className="w-11/12 md:w-5/6 flex justify-center mt-8 md:mt-10">
          <Tabs defaultValue="webdev" className="w-full max-w-2xl ">
            <TabsList className="flex flex-wrap justify-center mb-2 md:mb-3">
              <TabsTrigger
                className="text-[0.75rem] md:text-[0.95rem]"
                value="programming"
              >
                Programming & Scripting
              </TabsTrigger>
              <TabsTrigger
                className="text-[0.75rem] md:text-[0.95rem]"
                value="webdev"
              >
                Web Development
              </TabsTrigger>
              <TabsTrigger
                className="text-[0.75rem] md:text-[0.95rem]"
                value="ml"
              >
                Machine Learning
              </TabsTrigger>
            </TabsList>

            <TabsContent className="mt-14 md:mt-10" value="programming">
              <Card className="w-full flex flex-wrap p-4 gap-10 md:gap-12 py-6 justify-center">
                {programmingSkills.map((skill, index) => (
                  <img
                    key={index}
                    className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                    src={skill.skillURL}
                  />
                ))}
              </Card>
            </TabsContent>

            <TabsContent className="mt-14 md:mt-10" value="webdev">
              <Card className="w-full flex flex-wrap p-4 gap-10 md:gap-12 py-6 justify-center">
                {webSkills.map((skill, index) => (
                  <img
                    key={index}
                    className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                    src={skill.skillURL}
                  />
                ))}
              </Card>
            </TabsContent>

            <TabsContent className="mt-14 md:mt-10" value="ml">
              <Card className="w-full flex flex-wrap p-4 gap-10 md:gap-12 py-6 justify-center">
                {mlSkills.map((skill, index) => (
                  <img
                    key={index}
                    className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                    src={skill.skillURL}
                  />
                ))}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
