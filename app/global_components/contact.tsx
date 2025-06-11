"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ContactProps = {
  className?: string;
};

const formSchema = z.object({
  fullName: z.string().min(4, {
    message: "Le nom complet doit comporter au moins 4 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
  telephone: z
    .string()
    .min(8, { message: "Veuillez entrer un numéro de téléphone valide." }),
  message: z
    .string()
    .min(10, { message: "Le message doit comporter au moins 10 caractères." }),
});

export const Contact = ({ className }: ContactProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitted values:", values);
  };

  return (
    <section
      className={`bg-secondary flex flex-col items-end p-20 ${className} relative bg-gradient-to-br from-[#FF7C9B] to-[#941936] overflow-hidden`}
    >
      <img
        src="/accueil/StrawberryContact.png"
        alt=""
        className="absolute -left-45 -bottom-20  "
      />

      <div className="z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Contactez<span className="font-medium">-nous</span>
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 min-w-2xl mt-8"
          >
            {" "}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nom complet"
                      className="max-w-2xl border-0 border-b-2 shadow-none rounded-none p-6 placeholderWhite text-white text-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="Email"
                      placeholder="votre@email.com"
                      className="max-w-2xl border-0 border-b-2 shadow-none rounded-none p-6 placeholderWhite text-white text-xl "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="Téléphone"
                      placeholder="Votre numéro"
                      className="max-w-2xl border-0 border-b-2 shadow-none rounded-none p-6 placeholderWhite text-white text-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      className="max-w-2xl h-[150px] rounded-md border border-input bg-white px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none   disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      placeholder="Message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-secondary hover:bg-white/20 cursor-pointer rounded-full w-full font-semibold text-xl p-6 "
            >
              Envoyer
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
