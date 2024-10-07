import { useState, useEffect } from "react";
import NavigationCustomized from "../components/ui/navigation-customized";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import whatsappicon from "../assets/whatsapp_icon1.svg";
import chatbotIcon from "../assets/boticon.svg";
import mailIcon from "../assets/mailIcon.svg";
import profile from "../assets/profile-pic (1).png"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);

  const sendMessage = async (message) => {
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();
    return data.response;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setMessages((prev) => [...prev, input]);
    const response = await sendMessage(input);
    setMessages((prev) => [...prev, response]);
  };

  return (
    <>
      <section id="about" className="flex flex-col min-h-screen">
        <NavigationCustomized
          logo="Hashiru"
          navItems={[
            { href: "#about", description: "About" },
            { href: "#skills", description: "Skills" },
            { href: "#projects", description: "Projects" },
            { href: "#contact", description: "Contact" },
          ]}
        ></NavigationCustomized>
        <div className="flex flex-col-reverse md:flex-row flex-grow items-center justify-center md:mt-0 mt-20">
          <div className="flex flex-col items-center md:items-end justify-center w-full md:w-38/100 p-1">
            <h1 className="text-7xl md:text-9xl font-extrabold text-center pt-2 md:text-right">
              Hello!
            </h1>
            <h2 className="text-3xl md:text-3xl font-semibold text-center md:text-right">
              I am Hashiru Gunathilake
            </h2>
            <p className="text-2xl text-muted-foreground text-center md:text-right">
              An IT undergraduate at University of Moratuwa
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <Button className="p-3 md:p-6 ml-3 md:ml-5">
                <a href="https://github.com/HashiruG">
                  <i className="devicon-github-original-wordmark text-3xl md:text-4xl"></i>
                </a>
              </Button>
              <Button className="p-3 md:p-6 ml-3 md:ml-5">
                <a href="https://www.linkedin.com/in/hashiru-gunathilake-59181930a/">
                  <i className="devicon-linkedin-plain-wordmark text-3xl md:text-4xl"></i>
                </a>
              </Button>
              <Button className="p-3 md:p-6 md:ml-5">
                <a
                  href="https://wa.me/94718740515?text=Hello!%2C%20I%20would%20like%20to%20inquire%20about%20your%20technicalservices%21
"
                >
                  <img className="w-9" src={whatsappicon}></img>
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-62/100 p-4">
            <Avatar className="w-[300px] h-[300px] md:w-[460px] md:h-[460px]">
              <AvatarImage src={profile} />
            </Avatar>
          </div>
        </div>
      </section>

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

      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold md:mt-0 mt-20 mb-6 md:mb-10">
          My Projects
        </h1>

        <Carousel className="w-full max-w-sm md:max-w-4xl mt-8">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem className="basis-full" key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col md:flex-row p-4 items-center">
                      <img
                        className="w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] border-1 rounded-lg mb-4 md:mb-0"
                        src={project.image_url}
                        alt="./assets/project1.jpg"
                      />

                      <div className="flex flex-col justify-start py-3 ml-7px-0 md:px-6">
                        <h2 className="text-xl md:text-2xl py-3 font-semibold">
                          {project.name}
                        </h2>
                        <p
                          className="text-sm md:text-base text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: project.description.replace(
                              /\n/g,
                              "<br />"
                            ),
                          }}
                        ></p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      <section id="contact" className="flex flex-col items-center my-20 mx-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Connect with me
        </h1>
        <div className="flex flex-wrap justify-center gap-7 border-2 border-slate-100 rounded-lg p-6">
          <Button className="p-10" variant="outline">
            <a href="https://www.linkedin.com/in/hashiru-gunathilake-59181930a/">
              <img
                className="w-[6rem] h-[4rem]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain-wordmark.svg"
              />
            </a>
          </Button>
          <Button className="p-10" variant="outline">
            <a href="https://github.com/HashiruG">
              <img
                className="w-[6rem] h-[4rem]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
              />
            </a>
          </Button>
          <Button className="p-10" variant="outline">
            <a
              href="https://wa.me/94718740515?text=Hello!%2C%20I%20would%20like%20to%20inquire%20about%20your%20technicalservices%21
"
            >
              <img className="w-[6rem] h-[4rem]" src={whatsappicon}></img>
            </a>
          </Button>
          <Button className="p-10" variant="outline">
            <a href="mailto:gunathilakekrhh.22@uom.lk">
              <img
                className="w-[5rem] h-[4rem]"
                src={mailIcon}
              />
            </a>
          </Button>
        </div>
      </section>
      <Dialog>
        <DialogTrigger className="fixed right-[5%] bottom-[7%] ">
          <Button className="h-16" variant="outline">
            <img src={chatbotIcon}></img>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-[400px]">
          <div className="flex flex-col gap-2">
            <DialogHeader>
              <DialogTitle className="py-4">Chat Bot</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md w-[60%] my-6 ${
                    index % 2 === 0
                      ? "bg-slate-300"
                      : "bg-slate-800 text-white self-end"
                  }`}
                >
                  {message}
                </div>
              ))}
            </div>

            <Textarea
              placeholder="Type your message here."
              onChange={handleChange}
            />
            <div className="flex items-center">
              <Button onClick={handleSubmit}>Send message</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default HomePage;