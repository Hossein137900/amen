"use client";
// pages/index.js
import { useState } from "react";
import Image from "next/image";
import ShoesSelection from "./components/shoes-selection";
import ShirtSelection from "./components/shirt-selection";
import PantsSelection from "./components/pants-selection";
import LayerSelection from "./components/layer-selection";
import ImageButton from "./components/image-button";

type Selection =
  | "Casual T-shirt"
  | "Button-up Shirt"
  | "Graphic Tee"
  | "Jeans"
  | "Chinos"
  | "Joggers"
  | "Sneakers"
  | "Loafers"
  | "Boots"
  | "Hoodie"
  | "Blazer"
  | "Denim Jacket";

type Selections = {
  shirt: Selection | null;
  pants: Selection | null;
  shoes: Selection | null;
  layer: Selection | null;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Selections>({
    shirt: null,
    pants: null,
    shoes: null,
    layer: null,
  });

  const handleSelection = (category: keyof Selections, item: Selection) => {
    setSelections((prev) => ({ ...prev, [category]: item }));
    setStep(step + 1);
  };

  const getMBTIResult = () => {
    const mbtiType = getMBTI(selections);
    return mbtiType;
  };

  // Display different sections based on the current step
  if (step === 1) {
    return (
      <ShirtSelection
        onSelect={(shirt: Selection) => handleSelection("shirt", shirt)}
      />
    );
  } else if (step === 2) {
    return (
      <PantsSelection
        onSelect={(pants: Selection) => handleSelection("pants", pants)}
      />
    );
  } else if (step === 3) {
    return (
      <ShoesSelection
        onSelect={(shoes: Selection) => handleSelection("shoes", shoes)}
      />
    );
  } else if (step === 4) {
    return (
      <LayerSelection
        onSelect={(layer: Selection) => handleSelection("layer", layer)}
      />
    );
  } else {
    const mbtiType = getMBTIResult();
    return <CelebrityResult mbtiType={mbtiType} selections={selections} />;
  }
}

// Reusable component for image buttons with Tailwind styles

<ImageButton
  src={""}
  alt={""}
  onClick={function (): void {
    throw new Error("Function not implemented.");
  }}
  className={""}
/>;

// Shirt selection step
<ShirtSelection
  onSelect={function (
    selection: "Casual T-shirt" | "Button-up Shirt" | "Graphic Tee"
  ): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Pants selection step

<PantsSelection
  onSelect={function (selection: "Jeans" | "Chinos" | "Joggers"): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Shoes selection step

<ShoesSelection
  onSelect={function (selection: "Sneakers" | "Loafers" | "Boots"): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Layer selection step

<LayerSelection
  onSelect={function (selection: "Hoodie" | "Blazer" | "Denim Jacket"): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Display the final result based on MBTI type

function CelebrityResult({
  mbtiType,
  selections,
}: {
  mbtiType: string;
  selections: Selections;
}) {
  const celebrity = getCelebrity(mbtiType);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-one p-4">
      <h2 className="text-2xl font-bold mb-2 text-black-700 hover:text-yellow-400 text-center  ">
        mbti تایپ شخصیتی شما طبق
        <br />
      </h2>
      <span className="font-bold hover:scale-105 transition duration-700 text-2xl my-2 border-double border-4 rounded-full p-5">
        {" "}
        " {celebrity} "{" "}
      </span>

      <p className="text-lg mb-2 text-white-900 text-center mx-auto border-b-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
        reiciendis fugiat soluta pariatur fugit voluptas odio illo impedit
        quisquam ab? Modi eveniet est consequuntur voluptatem veniam earum ad
        deserunt odit?
      </p>

      <span className="font-bold text-black-700 hover:scale-105 transition duration-700 hover:transition-all my-4 border border-2 border-limer-500 rounded p-4 bg-yellow-500">
        {celebrity}
      </span>
      <div
        className="grid grid-cols-2 gap-4 text-center text-gray-900 my-3 text-center"
        dir="rtl"
      >
        <p className="text-xl font-semibold text-yellow-400 border rounded-full px-4 py-2 transition hover:scale-105 duration-700">
          لباسی که انتخاب کردی نشونه ی :
          <br />
          <span className="text-slate-100"> {selections.shirt}</span>
        </p>
        <p className="text-xl font-semibold text-yellow-400 border rounded-full px-4 py-2 transition hover:scale-105 duration-700">
          شلواری که انتخاب کردی نشونه ی :
          <br />
          <span className="text-slate-100"> {selections.pants}</span>
        </p>
        <p className="text-xl font-semibold text-yellow-400 border rounded-full px-4 py-2 transition hover:scale-105 duration-700">
          کفشی که انتخاب کردی نشونه ی :
          <br />
          <span className="text-slate-100"> {selections.shoes}</span>
        </p>
        <p className="text-xl font-semibold text-yellow-400 border rounded-full px-4 py-2 transition hover:scale-105 duration-700">
          لباسی که انتخاب کردی نشونه ی :
          <br />
          <span className="text-slate-100">{selections.layer}</span>
        </p>
      </div>
    </div>
  );
}

// Logic to calculate MBTI type based on selections
const getMBTI = (selections: Selections): string => {
  const traits = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Add logging to track trait values
  console.log("Initial Trait Values:", traits);

  if (selections.shirt === "Casual T-shirt") traits.E++, traits.S++, traits.P++;
  if (selections.shirt === "Button-up Shirt")
    traits.I++, traits.J++, traits.T++;
  if (selections.shirt === "Graphic Tee") traits.E++, traits.N++, traits.F++;

  if (selections.pants === "Jeans") traits.E++, traits.S++, traits.P++;
  if (selections.pants === "Chinos") traits.I++, traits.J++, traits.T++;
  if (selections.pants === "Joggers") traits.I++, traits.N++, traits.F++;

  if (selections.shoes === "Sneakers") traits.E++, traits.S++, traits.P++;
  if (selections.shoes === "Loafers") traits.I++, traits.J++, traits.T++;
  if (selections.shoes === "Boots") traits.I++, traits.N++, traits.F++;

  if (selections.layer === "Hoodie") traits.E++, traits.S++, traits.P++;
  if (selections.layer === "Blazer") traits.I++, traits.J++, traits.T++;
  if (selections.layer === "Denim Jacket") traits.E++, traits.N++, traits.F++;

  console.log("Final Trait Values:", traits);

  const mbtiType =
    (traits.E >= traits.I ? "E" : "I") +
    (traits.S >= traits.N ? "S" : "N") +
    (traits.T >= traits.F ? "T" : "F") +
    (traits.J >= traits.P ? "J" : "P");
  console.log("Calculated MBTI Type:", mbtiType);
  return mbtiType;
};

// Logic to map MBTI type to a celebrity

{
  /* <GetCelebrity /> */
}

const celebrityMap: { [key: string]: string[] } = {
  INTJ: [
    "Keanu Reeves",
    "Alan Turing",
    "Bruce Wayne (Batman)",
    "Jane Austen",
    "Marie Curie",
  ],
  INTP: [
    "Albert Einstein",
    "Elon Musk",
    "Sherlock Holmes",
    "Ada Lovelace",
    "Isaac Newton",
  ],
  ENTJ: [
    "Winston Churchill",
    "Margaret Thatcher",
    "Steve Jobs",
    "Donald Trump",
    "Julius Caesar",
  ],
  ISFP: [
    "Lana Del Ray",
    "Michael Jackson",
    "Jessica Alba",
    "Joss Stone",
    "Frida Kahlo",
  ],
  ENTP: [
    "Leonardo da Vinci",
    "Nikola Tesla",
    "Tony Stark (Iron Man)",
    "Mark Twain",
    "Amelia Earhart",
  ],
  INFJ: [
    "Carl Jung",
    "Mother Teresa",
    "Nelson Mandela",
    "Eleanor Roosevelt",
    "Martin Luther King Jr.",
  ],
  INFP: [
    "J.R.R. Tolkien",
    "C.S. Lewis",
    "Frida Kahlo",
    "Walt Disney",
    "Kurt Cobain",
  ],
  ENFJ: [
    "Oprah Winfrey",
    "Mother Teresa",
    "Nelson Mandela",
    "Eleanor Roosevelt",
    "Martin Luther King Jr.",
  ],
  ENFP: [
    "Robin Williams",
    "Jim Carrey",
    "Elizabeth Gilbert",
    "Albert Einstein",
    "Nikola Tesla",
  ],
  ISTJ: [
    "Captain America (Steve Rogers)",
    "Beyoncé",
    "Tom Hanks",
    "Morgan Freeman",
    "Angela Merkel",
  ],
  ISFJ: [
    "Captain America (Steve Rogers)",
    "Beyoncé",
    "Queen Elizabth II",
    "Artela Franklin",
    "Vin Diesel",
    "Kate Middleton",
    "Anna Hateway",
    "Will Turner",
  ],
  ISTP: [
    "James Bond",
    "Han Solo",
    "Bruce Lee",
    "Scarlett Johansson",
    "Keira Knightley",
  ],
  ESTJ: [
    "Donald Trump",
    "Judge Judy",
    "Steve Jobs",
    "Margaret Thatcher",
    "Winston Churchill",
  ],
  ESFP: [
    "Jim Carrey",
    "Jennifer Lopez",
    "Sansa Stark",
    "Monica",
    "Larry Bloom",
  ],
  ESFJ: [
    "Taylor Swift",
    "Will Smith",
    "Jennifer Lawrence",
    "Britney Spears",
    "Freddie Mercury",
  ],
  ESTP: ["Madonna", "Rocket", "Ant-Man", "Bruce Wilis"],
};
const getCelebrity = (mbtiType: string): string => {
  const celebrities = celebrityMap[mbtiType];
  if (!celebrities) {
    return "A Mystery Celebrity";
  }

  const randomIndex = Math.floor(Math.random() * celebrities.length);
  return celebrities[randomIndex];
};
