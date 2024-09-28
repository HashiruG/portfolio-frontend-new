import NavigationCustomized from "./components/ui/navigation-customized";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
    </>
  );
}

export default App;
