import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddProjects = () => {
  const [name, setName] = useState("");
  const [github_link, setGithub_link] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    const formData = new FormData();
    formData.append("name", name); 
    formData.append("description", description); 
    formData.append("github_link", github_link);
    if (image) {
      formData.append("image", image);
    }

    try {
     
      const response = await fetch("https://portfoliobackend-hub5cqg9d7c6bxat.canadacentral-01.azurewebsites.net/projects", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
       
        console.log("Project added successfully!");
       
        setName("");
        setDescription("");
        setGithub_link("")
        setImage(null);
      } else {
      
        console.error("Failed to add project.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="name">Project Title:</Label>
            <Input
              className="my-2"
              id="name"
              type="text"
              placeholder="Enter Project Title"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)} 
            />

            <Label htmlFor="description">Project Description:</Label>
            <Textarea
              className="my-2"
              id="description"
              placeholder="Enter Project Description"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Label htmlFor="img">Project Image:</Label>
            <Input
              className="my-2"
              id="img"
              type="file"
              name="image"
              onChange={handleImageChange} 
            />
            <Label htmlFor="github_link">Github Link:</Label>
            <Input
              className="my-2"
              id="github_link"
              type="text"
              placeholder="Enter Github Link"
              value={github_link}
              name="github_link"
              onChange={(e) => setGithub_link(e.target.value)} 
            />
            <Button className="my-2" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddProjects;
