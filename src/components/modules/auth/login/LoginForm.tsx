"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "./loginValidation";
import Link from "next/link";
import Logo from "@/app/assets/svgs/Logo";
import { loginUser, reCaptchaTokenVerification } from "@/services/AuthServices";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const LoginForm = () => {  
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [reCaptchaStatus, setReCaptchaStatus] = useState(false);

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const handleRecapture = async (value: string | null) => {
    try {
      const res = await reCaptchaTokenVerification(value!);

      if (res?.success) {
        setReCaptchaStatus(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }

      reset();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl space-y-7 flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <Logo />
        <div> 
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTURE_CLIENT_KEY as string}
              onChange={handleRecapture}
            />
          </div>
          <Button
            disabled={reCaptchaStatus ? false : true}
            type="submit"
            className="mt-5 w-full"
          >
            {isSubmitting ? "Logging...." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Do not have any account ?
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
