"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { callAPI } from "../config/axios";

const loginFormSchema = z.object({
  username: z.string().min(3, "Min 3 karakter").max(16, "Max 16 karakter"),
  password: z.string().min(6, "Min 6 karakter"),
});

type ILoginFormSchema = z.infer<typeof loginFormSchema>;

const Ketua = () => {
  const router = useRouter();
  const form = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await callAPI.post("/admin/sign-in", values);
      alert("Login success!!");
      localStorage.setItem("token", res.data.token);
      router.replace("/");
    } catch (error) {
      console.log(error);
      alert("Login failed!!");
    }
  });
  return (
    <div className="mb-20 flex h-[80vh] items-center justify-center px-[14%]">
      <Form {...form}>
        <form onSubmit={onSubmit} className="w-full">
          <Card className="mx-auto w-[70%] py-5 md:w-[40%]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Login Admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <FormField
                control={control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default Ketua;
