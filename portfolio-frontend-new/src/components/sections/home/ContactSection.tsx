import { Button } from "@/components/ui/button";
import whatsappicon from "../../../assets/whatsapp_icon1.svg";
import mailIcon from "../../../assets/mailIcon.svg";

const ContactSection = () => {
    return(
        <>
            <section id="contact" className="flex flex-col items-center mb-12 mx-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Connect with me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 border-2 border-slate-100 rounded-lg p-6">
  <Button className="p-10 w-full" variant="outline">
    <a href="https://www.linkedin.com/in/hashiru-gunathilake-59181930a/">
      <img
        className="w-[6rem] h-[4rem]"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain-wordmark.svg"
      />
    </a>
  </Button>
  <Button className="p-10 w-full" variant="outline">
    <a href="https://github.com/HashiruG">
      <img
        className="w-[6rem] h-[4rem]"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
      />
    </a>
  </Button>
  <Button className="p-10 w-full" variant="outline">
    <a
      href="https://wa.me/94718740515?text=Hello!%2C%20I%20would%20like%20to%20inquire%20about%20your%20technicalservices%21"
    >
      <img className="w-[6rem] h-[4rem]" src={whatsappicon}></img>
    </a>
  </Button>
  <Button className="p-10 w-full" variant="outline">
    <a href="mailto:gunathilakekrhh.22@uom.lk">
      <img
        className="w-[5rem] h-[4rem]"
        src={mailIcon}
      />
    </a>
  </Button>
</div>



      </section>
        </>
    )
}

export default ContactSection;