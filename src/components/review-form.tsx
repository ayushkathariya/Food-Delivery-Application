import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ReviewForm() {
  return (
    <form className="flex gap-2">
      <Input type="text" placeholder="Write your review" name="comment" />
      <Button type="submit"> Submit</Button>
    </form>
  );
}
