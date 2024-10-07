import React from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddProjects = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const formData = new FormData();
    formData.append("name", name); 
    formData.append("description", description); 
    formData.append("image", image); 

    try {
     
      const response = await fetch("http://localhost:8000/projects", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
       
        console.log("Project added successfully!");
       
        setName("");
        setDescription("");
        setImage(null);
      } else {
      
        console.error("Failed to add project.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
              onChange={(e) => setName(e.target.value)} 
            />

            <Label htmlFor="description">Project Description:</Label>
            <Textarea
              className="my-2"
              id="description"
              placeholder="Enter Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Label htmlFor="img">Project Image:</Label>
            <Input
              className="my-2"
              id="img"
              type="file"
              onChange={handleImageChange} 
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
