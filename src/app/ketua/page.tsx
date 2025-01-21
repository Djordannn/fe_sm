import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const Ketua = () => {
  return (
    <div className="h-screen px-[14%] pt-[8rem]">
      <Card className="mx-auto w-[40%]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login Admin</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="text" placeholder="Username"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button type="submit">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ketua;
