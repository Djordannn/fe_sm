import React from "react";
import Image from "next/image";
import banner from "../../../../public/image/banner.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Category = () => {
  return (
    <div className="px-[14%] py-14">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={banner}
              alt="img"
              className="aspect-[4/3] rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-3">
              <CardTitle className="text-lg">Car Name</CardTitle>
              <p className="text-[10px] text-gray-600">Tahun 2019</p>
            </div>
            <CardDescription className="text-lg text-black">
              Rp.28x.xxx.xxx
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4">
            <Button className="w-full bg-zinc-800">Cek Detail</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Category;
