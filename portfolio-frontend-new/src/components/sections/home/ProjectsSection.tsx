import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

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

  return (
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
                      className="w-[22rem] h-[16rem] md:w-[22rem] md:h-[19rem] border-1 rounded-lg mb-4 md:mb-0"
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
