"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormLabel,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { callAPI } from "../config/axios";
import { Button } from "@/components/ui/button";

interface IProduct {
  name: string;
  price: string;
}

const itemSchema = z.object({
  name: z.string().min(3, "Min 3 karakter").max(16, "Max 16 karakter"),
  price: z.string().min(6, "Min 6 karakter"),
});

type TItemsSchema = z.infer<typeof itemSchema>;

const Administration = () => {
  const [data, setData] = useState<IProduct[]>([]);

  const form = useForm<TItemsSchema>({
    resolver: zodResolver(itemSchema),
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await callAPI.post("/product/add-product", values);
      console.log(res.data);
      reset();
      alert("Add items success!!");
    } catch (error) {
      console.log(error);
      alert("Add items failed!!");
    }
  });

  const getData = async () => {
    try {
      const res = await callAPI.get("/product/get-product");
      setData(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-[14%] pb-24">
      <h2>Admnistration page</h2>
      <div>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <Card>
              <CardContent className="p-5">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
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
                  name="price"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
      <div>
        {!data.length ? (
          <p>Loading...</p>
        ) : (
          data.map((val, index) => (
            <div key={index}>
              <p>{val.name}</p>
              <p>{val.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Administration;
