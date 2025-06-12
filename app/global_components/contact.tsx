"use client";
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
import { useState } from "react";
import AnimatedSendButton from "./sendButton";
import { toast } from "sonner";

type ContactProps = {
  version?: "accueil" | "page";
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

export const Contact = ({ version }: ContactProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      telephone: "",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    console.log("Submitted values:", values);
    try{
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset({
        fullName: "",
        email: "",
        telephone: "",
        message: "",
      });
      const { message } = await response.json();
      
      toast(message);
      
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }catch(e){
      if (e instanceof Error) {
        toast(e.message);
      } else {
        toast("Une erreur est survenue.");
      }

    }finally{
      setIsSubmitting(false)
    }
    

  };


  if (version === "accueil") {
    return (
      <section
        className={`bg-secondary flex flex-col md:items-end items-center md:p-20 p-8   md:w-[80%] w-full max-w-7xl mx-auto md:rounded-2xl  mt-10 relative bg-gradient-to-br from-[#FF7C9B] to-[#941936] overflow-hidden`}
      >
        <img
          src="/accueil/RasberryContact.webp"
          alt=""
          className="absolute md:-left-80 md:-bottom-80 -left-40 -bottom-20 md:scale-75 "
        />

        <div className="z-10 lg:min-w-2xl md:min-w-xl max-sm:w-full">
          <div className=" max-sm:text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold ">
              Contactez<span className="font-medium">-nous</span>
            </h2>
            <p className="md:text-md text-sm font-light md:mt-2">
              Notre service client est là pour vous aider. Pour toute question
              sur nos produits, contactez-nous.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 md:mt-8 mt-6"
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
                        className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm  backdrop-blur-2xl bg-white/10"
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
                        className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm backdrop-blur-2xl bg-white/10"
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
                        className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm backdrop-blur-2xl bg-white/10"
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
                        className=" h-[150px] rounded-md  bg-white/50 px-3 py-2 text-sm md:text-lg text-black  placeholder:text-black/60   focus-visible:outline-none   disabled:cursor-not-allowed disabled:opacity-50 resize-none backdrop-blur-2xl "
                        placeholder="Message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              {/* <Button
                type="submit"
                className="bg-gradient-to-r from-[#FF4F79] to-[#941936] hover:text-secondary hover:from-[#FFFFFF] hover:to-[#FFFFFF] ease-in-out hover:animate-pulse cursor-pointer rounded-full w-full font-semibold md:text-xl text-md md:p-6  p-4 shadow-lg"
              >
                Envoyer
              </Button> */}
              <AnimatedSendButton
                isSubmitting={isSubmitting}
                isSuccess={isSuccess}
              />
            </form>
          </Form>
        </div>
      </section>
    );
  }else{
    return (
      <section
        className={`bg-secondary flex flex-col md:items-end items-center justify-center md:p-40 p-8  w-full mx-auto rounded-[3rem] h-full relative bg-gradient-to-br from-[#FF7C9B] to-[#941936] overflow-hidden`}
      >
        <img
          src="/accueil/RasberryContact.webp"
          alt=""
          className="absolute md:-left-80 md:-bottom-80 -left-40 -bottom-20 md:scale-75 "
        />
        <div className="z-10 mx-auto">
          <div className=" lg:min-w-2xl md:min-w-xl max-sm:w-full">
            <div className=" max-sm:text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold ">
                Contactez<span className="font-medium">-nous</span>
              </h2>
              <p className="md:text-md text-sm font-light md:mt-2">
                Notre service client est là pour vous aider. Pour toute question
                sur nos produits, contactez-nous.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 md:mt-8 mt-6"
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
                          className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm  backdrop-blur-2xl bg-white/10"
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
                          className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm backdrop-blur-2xl bg-white/10"
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
                          className=" border-0 border-b-2 shadow-none rounded-md p-6 placeholderWhite text-white md:text-lg text-sm backdrop-blur-2xl bg-white/10"
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
                          className=" h-[150px] rounded-md  bg-white/50 px-3 py-2 text-sm md:text-lg  placeholder:text-black focus-visible:outline-none   disabled:cursor-not-allowed disabled:opacity-50 resize-none backdrop-blur-2xl "
                          placeholder="Message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                <AnimatedSendButton
                  isSubmitting={isSubmitting}
                  isSuccess={isSuccess}
                />
              </form>
            </Form>
          </div>
        </div>
      </section>
    );
  }
};
