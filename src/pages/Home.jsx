import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import FAQ from "../data/faq.json";
import featured from "../data/featuredlist.json";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap:20 py-10 sm:py-20">
      {/* hero */}
      <section className="text-center h-[50vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-gray-800">
          Create Your Perfect <span className="text-primary">Resume</span>
          <span className="block">
            in Minutes with <span className="text-destructive">AI</span>
          </span>
        </h1>
        <h3 className="text-xs sm:text-xl text-gray-700 font-semibold py-5 ">
          Build a professional, standout resume that impresses recruiters with
          our AI-powered resume builder
        </h3>
        <div className="py-8 sm:py-12">
          {/* button  */}
          <Link to={"/auth/signin"}>
            <Button size="lg" variant={"destructive"} className={"text-lg"}>
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* how to work */}
      <section className="py-10">
        <h2 className="font-bold text-md sm:text-2xl text-center">
          Why Choose Our AI Resume Builder?
        </h2>

        <div className="grid mt-10 gap-4 f grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {featured.map((item, index) => {
            return (
              <Card key={index} className={"w-60 mx-auto sm:w-full"}>
                <CardContent className="flex flex-col bg-secondary aspect-square items-center justify-center w-full p-6">
                  <div className="h-20 lg:h-28 overflow-hidden">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className={"my-4 text-sm sm:text-xl text-gray-700"}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.paragraph}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FAQ  */}
      <section className="px-1 sm:px-[6rem]">
        <h2 className="font-bold text-md sm:text-2xl">FAQ</h2>
        <Accordion type="single" collapsible>
          {FAQ.map((item, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </main>
  );
};

export default Home;
