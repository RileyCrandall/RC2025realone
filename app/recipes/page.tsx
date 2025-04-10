"use client";

import { title } from "@/components/primitives";
// import { Button } from "@heroui/button";
// import { link } from "@heroui/theme";

export default function RecipesPage() {
  return (
    <>
      <h1 className={title()}>recipes</h1>
      <div>
        <p className="m-6">child #1</p>
        <p className="m-6">child #2</p>
        <p className="m-6">child #3</p>
      </div>
      {/* <Button className="bg-red-600" as={link} href="https://issaquah.instructure.com/courses/36871/discussion_topics/179778">Canvas</Button> */}
    </>
  );
}