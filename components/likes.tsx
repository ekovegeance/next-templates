import React, { useState } from "react";
import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react";

export default function Likes() {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="mt-10">
      <Button
        className="rounded-full bg-red-700 hover:bg-red-500"
        onClick={handleLikes}
      ><ThumbsUp/>
        Like {likes}
      </Button>
    </div>
  );
}
