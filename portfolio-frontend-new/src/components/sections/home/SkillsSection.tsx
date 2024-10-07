import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card} from "@/components/ui/card";


const SkillsSection = () => {
    return(
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
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                />
              </Card>
            </TabsContent>

            <TabsContent className="mt-14 md:mt-10" value="webdev">
              <Card className="w-full flex flex-wrap p-4 gap-10 md:gap-12 py-6 justify-center">
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                />
              </Card>
            </TabsContent>

            <TabsContent className="mt-14 md:mt-10" value="ml">
              <Card className="w-full flex flex-wrap p-4 gap-10 md:gap-12 py-6 justify-center">
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
                />
                <img
                  className="h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] my-3 md:my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"
                />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
        </>
    )
}

export default SkillsSection