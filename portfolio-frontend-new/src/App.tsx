import NavigationCustomized from "./components/ui/navigation-customized";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  return (
    <>
      <section className="flex flex-col min-h-screen">
        <NavigationCustomized
          logo="Hashiru"
          navItems={[
            { href: "#about", description: "About" },
            { href: "#about", description: "Skills" },
            { href: "#about", description: "projects" },
            { href: "#about", description: "Contact" },
          ]}
        ></NavigationCustomized>
        <div className="flex flex-grow">
          <div className="flex items-end flex-col justify-center w-1/3">
            <h1 className="text-9xl font-extrabold">Hello!</h1>
            <h2 className="text-4xl font-semibold ">
              I am Hashiru Gunathilake
            </h2>
            <p className="text-xl text-muted-foreground">
              An IT undergraduate at University of Moratuwa
            </p>
            <div>
              <Button className="mt-3 p-6">
                <i className="devicon-github-original-wordmark text-4xl"></i>
              </Button>
              <Button className="mt-3 p-6 ml-5">
                <i className="devicon-linkedin-plain-wordmark text-4xl"></i>
              </Button>
              <Button className="mt-3 p-6 ml-5">
                <i className="devicon-github-original-wordmark text-4xl"></i>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center w-2/3">
            <Avatar className="w-[460px] h-[460px]">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-extrabold mb-10">My Skills</h1>

        <div className="w-5/6 flex justify-center mt-10">
          <Tabs defaultValue="webdev" className="w-full max-w-2xl">
            <TabsList className="flex justify-center mb-6">
              <TabsTrigger value="programming">
                Programming & Scripting
              </TabsTrigger>
              <TabsTrigger value="webdev">Web Development</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
            </TabsList>
            <TabsContent value="programming">
              <Card className="w-full max-w-8xl mx-auto flex flex-wrap p-4 gap-12 py-6 justify-center">
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                />
              </Card>
            </TabsContent>
            <TabsContent value="webdev">
              <Card className="w-full max-w-8xl mx-auto flex flex-wrap p-4 gap-12 py-6 justify-center">
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                />

                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                />

                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                />
              </Card>
            </TabsContent>
            <TabsContent value="ml">
              <Card className="w-full max-w-8xl mx-auto flex flex-wrap p-4 gap-12 py-6 justify-center">
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
                />
                <img
                  className="h-[6rem] w-[6rem] my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"
                />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-extrabold mb-10">My Projects</h1>

        <Carousel className="w-full max-w-5xl mt-16">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem className="basis-1/2" key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex p-4">
                      <img
                        className="w-72 h-72 border-1 rounded-lg"
                        src="https://github.com/shadcn.png"
                      ></img>
                      <div className="flex flex-col justify-start  px-6 ">
                        <h2 className="text-2xl font-semibold ">Hashiru Gunathilake</h2>
                        <p className="text-sm text-muted-foreground">
                          An IT undergraduate at University of Moratuwams
                          </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="flex flex-col items-center my-20">
        <h1 className="text-5xl font-bold mb-10">Connect with me</h1>
        <div className="flex flex-wrap justify-center gap-7 border-2 border-slate-100 rounded-lg p-6">
          <Button className="p-10" variant="outline">
            <img
              className="w-[6rem] h-[4rem]"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain-wordmark.svg"
            />
          </Button>
          <Button className="p-10" variant="outline">
            <img
              className="w-[6rem] h-[4rem]"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            />
          </Button>
          <Button className="p-10" variant="outline">
            <img
              className="w-[6rem] h-[4rem]"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain-wordmark.svg"
            />
          </Button>
          <Button className="p-10" variant="outline">
            <img
              className="w-[6rem] h-[4rem]"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            />
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
