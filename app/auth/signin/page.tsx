import React from "react";
import { SignInForm } from "./Form";
import { MountingPoint } from "@/components/Sidebar/MountingPoint";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="px-12 py-4 rounded-xl bg-slate-100/75">
        <div className="flex gap-2 items-center justify-center">
          <Image
            className="rounded-md"
            src={"/logo.svg"}
            alt="logo"
            width={125}
            height={65}
          />
          <h1 className="text-lg font-bold mb-2">Login</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-fit max-w-[300px] p-6">
          <SignInForm />
          <p className="text-center w-fit font-semibold">
            {"Don't have an account"}
            <Link
              className="text-blue-500 font-bold ml-1"
              href={"/auth/signup"}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
