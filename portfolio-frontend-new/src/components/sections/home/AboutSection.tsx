import NavigationCustomized from "@/components/ui/navigation-customized"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import whatsappicon from "../../../assets/whatsapp_icon1.svg";
import profile from "../../../assets/profile-pic (1).png"

const AboutSection = () =>{
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
        </>
    )
}

export default AboutSection;