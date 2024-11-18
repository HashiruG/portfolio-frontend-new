import NavigationCustomized from "@/components/ui/navigation-customized";
import AddProjects from "@/components/sections/admin/AddProjects";
import AddSkills from "@/components/sections/admin/AddSkills";

const AdminPage = () => {


  return (
    <>
      <NavigationCustomized
        logo="Hashiru"
        navItems={[{ href: "", description: "Admin Panel" }]}
      />
      <div className="flex flex-col p-36 gap-10">
        <AddProjects />
        <AddSkills />
      </div>
    </>
  );
};

export default AdminPage;
