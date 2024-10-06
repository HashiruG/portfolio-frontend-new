import NavigationCustomized from "@/components/ui/navigation-customized"


const AdminPage = () => {
    return (
        <div>
          <NavigationCustomized
          logo="Hashiru"
          navItems={[
            { href: "#about", description: "Add projects" },
            { href: "#skills", description: "Add Skills" }
          ]}
        ></NavigationCustomized>
        </div>
    )
}

export default AdminPage