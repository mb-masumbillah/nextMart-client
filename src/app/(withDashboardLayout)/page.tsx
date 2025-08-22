"use client";

import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";



const HomePage = () => {
  const {user} = useUser()

  console.log(user)


  return (
    <div>
      <Button>click now</Button>
    </div>
  );
};

export default HomePage;
