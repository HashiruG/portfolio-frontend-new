import React from "react";
import NavigationCustomized from "@/components/ui/navigation-customized";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminPage = () => {
  return (
    <>
      <NavigationCustomized
        logo="Hashiru"
        navItems={[{ href: "", description: "Admin Panel" }]}
      />
      <div className="flex flex-col p-36 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Add Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <Label htmlFor="title">Project Title:</Label>
              <Input
                className="my-2"
                id="title"
                type="text"
                placeholder="Enter Project Title"
              />

              <Label htmlFor="description">Project Description:</Label>
              <Textarea
                className="my-2"
                id="description"
                placeholder="Enter Project description"
              />

              <Label htmlFor="img">Project Image:</Label>
              <Input className="my-2" id="img" type="file"></Input>
              <Button className="my-2" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <Label htmlFor="name">Skill Name:</Label>
              <Input
                className="my-2"
                id="name"
                type="text"
                placeholder="Enter Skill Name"
              />

              <Label htmlFor="url">Skill Icon URL:</Label>
              <Input
                className="my-2"
                id="url"
                type="text"
                placeholder="Enter Icon URL"
              />

              <Button className="my-2" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminPage;
