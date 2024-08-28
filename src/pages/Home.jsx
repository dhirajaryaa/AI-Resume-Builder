import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/faq";
import React from "react";

const Home = () => {
  return (
    <section>
      {/* hero */}
      <h1 className="text-xl font-bold">
        Create Your Perfect Resume in Minutes with AI!
      </h1>

      {/* feature */}

      {/* how to work */}

      {/* FAQ  */}

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
  );
};

export default Home;
