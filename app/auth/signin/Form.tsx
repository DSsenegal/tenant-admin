"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Fingerprint, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function SignInForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "superadmin@ayshei.com",
      password: "superadmin123",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        toast({
          title: "Erreur de connexion !",
          description: "Vérifiez vos identifiants et réessayez",
          variant: "destructive",
        });
        setLoading(false);
      } else {
        toast({
          title: "Connexion réussie",
          description: "Vous allez être redirigé vers votre dashboard",
          variant: "success",
        });
        router.push("/");
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-w-80 w-fit space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="user@ayshei.com" {...field} />
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
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-primary" type="submit">
          {loading && <Loader2 className="mr-2 animate-spin" />}
          Continue
        </Button>

        {/* or divider */}
        <Separator className="w-full h-[1px] bg-gray-500/20" />

        <Button variant={"outline"} className="w-full flex gap-2">
          <Fingerprint size={18} />
          Sign in with UAE PASS
        </Button>
      </form>
    </Form>
  );
}
