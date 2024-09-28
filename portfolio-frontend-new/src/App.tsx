import NavigationCustomized from "./components/ui/navigation-customized";

function App() {
  return (
    <>
      <header className="flex flex-col">
        <NavigationCustomized
          logo="Hashiru"
          navItems={[
            { href: "#about", description: "About" },
            { href: "#about", description: "Skills" },
            { href: "#about", description: "projects" },
            { href: "#about", description: "Contact" },
          ]}
        ></NavigationCustomized>
        <div>
          <div></div>
          <div></div>
        </div>
      </header>
    </>
  );
}

export default App;
