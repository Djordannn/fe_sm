import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div className="px-[14%] py-14">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="py-4 text-lg font-semibold">Title</CardHeader>
          <CardContent>
            <CardTitle className="font-medium">Subtitle</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              distinctio.
            </CardDescription>
            <CardFooter className="px-0 py-3">
              <a href="#" className="rounded-md bg-zinc-400 p-3">
                <Link />
              </a>
            </CardFooter>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 text-lg font-semibold">Title</CardHeader>
          <CardContent>
            <CardTitle className="font-medium">Subtitle</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              distinctio.
            </CardDescription>
            <CardFooter className="px-0 py-3">
              <a href="#" className="rounded-md bg-zinc-400 p-3">
                <Link />
              </a>
            </CardFooter>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 text-lg font-semibold">Title</CardHeader>
          <CardContent>
            <CardTitle className="font-medium">Subtitle</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              distinctio.
            </CardDescription>
            <CardFooter className="px-0 py-3">
              <a href="#" className="rounded-md bg-zinc-400 p-3">
                <Link />
              </a>
            </CardFooter>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 text-lg font-semibold">Title</CardHeader>
          <CardContent>
            <CardTitle className="font-medium">Subtitle</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              distinctio.
            </CardDescription>
            <CardFooter className="px-0 py-3">
              <a href="#" className="rounded-md bg-zinc-400 p-3">
                <Link />
              </a>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Info;
