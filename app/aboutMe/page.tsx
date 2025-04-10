"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { useState } from "react";
// import { Image } from "next/image";

export default function AboutMePage() {
    let facts: string[] = ["the fastes womens 200m dash is 21.34 sec",
     "the fastest 100m time is 10.49 sec by world renowned flojo",
      "the sky is not blue but it is the reflection of the water that gives it that blue apperance",
       "suits is one of the greatest shows ever",
        "i run track!",
         "the 400m sprint is proven one of the hardests events to do in the sport of track",
          "Aritzia the fashion brand is originated from canada",
           "the first olympic race was a 200m sprinter the length of the ancient greek olympic stadium",
            "in a race around the curve they use a staggered start to even out the races",
            "i run the 100m, 200m, and the relays containing those events,i also want to start running the 400m",
             "the 400 has the most long and grueling training to become a good runner" ]
    const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)]);}}>
        fun facts
      </Button>
      <p>{fact}</p>
      <img src="/running.jpg" alt="i am running" width="280" height="270"/>
      <img src="hello.jpg" alt="i am happy" width="280" height="270" />
      <img src="dab.jpg" alt="i am dabbing" width="280" height="270" />
      <p>Hi there! My name is Riley and I obviously run track and enjoy it most times. I go to skyline high school with all my friends and its pretty cool i guess. I really like Giraffes because their tall like me. My best friends names are Laine, Claire, Jane and my brother and dad. my favorite food is poke from </p>
      <a href="https://www.athletic.net/team/82077/track-and-field-outdoor/2025">Athletic.net</a>
    </div>
  );
}