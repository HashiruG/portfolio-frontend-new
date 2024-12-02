import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  interface Project {
    image_url: string;
    name: string;
    description: string;
    github_link: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://portfoliobackend-hub5cqg9d7c6bxat.canadacentral-01.azurewebsites.net/projects", {
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

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold md:mt-0 mt-4  md:mb-10">
        My Projects
      </h1>

      <Carousel className="w-[79%] md:max-w-4xl mt-8">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem className="basis-full" key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col md:flex-row p-4 items-center">
                    <img
                      className="w-[22rem] h-[16rem] md:w-[19rem] md:h-[19rem] border-1 rounded-lg mb-4 md:mb-0"
                      src={project.image_url}
                      alt={`${project.name} image`}
                    />

                    <div className="flex flex-col justify-start py-3 ml-[7px] md:px-6">
                      <h2 className="text-xl md:text-2xl py-3 font-semibold">
                        {project.name}
                      </h2>
                      <p
                        className="text-sm md:text-base text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: project.description.replace(/\n/g, "<br />"),
                        }}
                      ></p>
                      <Button className="mt-6 md:w-[30%]"><a href={project.github_link}>Github Repository</a></Button>
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
  );
};

export default ProjectsSection;
