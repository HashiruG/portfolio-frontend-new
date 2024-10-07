import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddSkills = () => {
  const [skillName, setSkillName] = useState("");
  const [skillURL, setSkillURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    const skillData = {
        skillName: skillName,
        skillURL: skillURL
    }

    try {
      const response = await fetch("http://localhost:8000/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skillData),
      });

      if (response.ok) {
        console.log("Skill added successfully!");
        setSkillName("");
        setSkillURL("");
      } else {
        console.error("Failed to add skill.");
      }
    } catch (error) {
      console.error("Error:", error);
    }


  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="name">Skill Name:</Label>
            <Input
              className="my-2"
              id="name"
              type="text"
              placeholder="Enter Skill Name"
              onChange={(e) => setSkillName(e.target.value)}
            />

            <Label htmlFor="url">Skill Icon URL:</Label>
            <Input
              className="my-2"
              id="url"
              type="text"
              placeholder="Enter Icon URL"
              onChange={(e) => setSkillURL(e.target.value)}
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

export default AddSkills;