"use client"
// pages/index.js
import { useState } from 'react';
import Image from 'next/image';

type Selection = 'Casual T-shirt' | 'Button-up Shirt' | 'Graphic Tee' | 'Jeans' | 'Chinos' | 'Joggers' | 'Sneakers' | 'Loafers' | 'Boots' | 'Hoodie' | 'Blazer' | 'Denim Jacket';

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
    setSelections(prev => ({ ...prev, [category]: item }));
    setStep(step + 1);
  };

  const getMBTIResult = () => {
    const mbtiType = getMBTI(selections);
    return mbtiType;
  };

  // Display different sections based on the current step
  if (step === 1) {
    return <ShirtSelection onSelect={(shirt: Selection) => handleSelection('shirt', shirt)} />;
  } else if (step === 2) {
    return <PantsSelection onSelect={(pants: Selection) => handleSelection('pants', pants)} />;
  } else if (step === 3) {
    return <ShoesSelection onSelect={(shoes: Selection) => handleSelection('shoes', shoes)} />;
  } else if (step === 4) {
    return <LayerSelection onSelect={(layer: Selection) => handleSelection('layer', layer)} />;
  } else {
    const mbtiType = getMBTIResult();
    return <CelebrityResult mbtiType={mbtiType} selections={selections} />;
  }
}

// Reusable component for image buttons with Tailwind styles
function ImageButton({ src, alt, onClick }: { src: string; alt: string; onClick: () => void; className: string }) {
  return (
    <button className="flex flex-col items-center m-4" onClick={onClick}>
      <Image src={src} alt={alt} width={200} height={200} className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
      <p className="mt-2 text-lg font-semibold text-gray-700">{alt}</p>
    </button>
  );
}

// Shirt selection step
function ShirtSelection({ onSelect }: { onSelect: (selection: Selection) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[light-blue-color]">
      <h2 className="text-3xl font-bold mb-6 text-[black-color]" dir='rtl'>یکی از لباس های زیر و انتخاب کن تا بت بگم سلیقت شبیه کیه !</h2>
      <div className="grid grid-cols-3 gap-4 " >
        <ImageButton
          src="/assets/images/amen1.jpg"
          alt="Casual T-shirt"
          onClick={() => onSelect('Casual T-shirt')}
          className="bg-[accent-color] rounded hover:opacity-80 p-4" // Added custom class for button styling
        />
        <ImageButton
          src="/assets/images/amen2.jpg"
          alt="Button-up Shirt"
          onClick={() => onSelect('Button-up Shirt')}
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
        />
        <ImageButton
          src="/assets/images/amen3.jpg"
          alt="Graphic Tee"
          onClick={() => onSelect('Graphic Tee')}
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
        />
      </div>
    </div>
  );
}

// Pants selection step
function PantsSelection({ onSelect }: { onSelect: (selection: Selection) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-900" dir='rtl'>حالا بگو بهم که با کدوم یکی از این شلوار ها میخوای تو پاییز استایل بزنی ؟</h2>
      <div className="flex space-x-4">
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amn4.jpg" alt="Jeans" onClick={() => onSelect('Jeans')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen5.jpg" alt="Chinos" onClick={() => onSelect('Chinos')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen6.jpg" alt="Joggers" onClick={() => onSelect('Joggers')} />
      </div>
    </div>
  );
}

// Shoes selection step
function ShoesSelection({ onSelect }: { onSelect: (selection: Selection) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-900" dir='rtl'>کدوم یکی از این کفش ها روحتو تو پاییز راضی میکنه ؟</h2>
      <div className="flex space-x-4">
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen7.jpg" alt="Sneakers" onClick={() => onSelect('Sneakers')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen8.jpg" alt="Loafers" onClick={() => onSelect('Loafers')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen9.jpg" alt="Boots" onClick={() => onSelect('Boots')} />
      </div>
    </div>
  );
}

// Layer selection step
function LayerSelection({ onSelect }: { onSelect: (selection: Selection) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-900" dir='rtl'>سوال اخرمم اینه که ایتم مورد علاقت برای پاییز چیه ؟؟</h2>
      <div className="flex space-x-4">
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen10.jpg" alt="Hoodie" onClick={() => onSelect('Hoodie')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen11.jpg" alt="Blazer" onClick={() => onSelect('Blazer')} />
        <ImageButton className="bg-[accent-color] rounded hover:opacity-80 p-4" src="/assets/images/amen11.jpg" alt="Denim Jacket" onClick={() => onSelect('Denim Jacket')} />
      </div>
    </div>
  );
}

// Display the final result based on MBTI type
function CelebrityResult({ mbtiType, selections }: { mbtiType: string; selections: Selections }) {
  const celebrity = getCelebrity(mbtiType);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">خوب طبق مدل شخصیتی mbti شخصیت تو شبیه : {celebrity}</h2>
      <p className="text-lg mb-4 text-gray-900 text-center mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reiciendis fugiat soluta pariatur fugit voluptas odio illo impedit quisquam ab? Modi eveniet est consequuntur voluptatem veniam earum ad deserunt odit? {celebrity}!</p>
      <div className="grid grid-cols-2 gap-4 text-center text-gray-900" dir='rtl'>
        <p className="text-xl font-semibold">لباسی که انتخاب کردی نشونه ی : {selections.shirt}</p>
        <p className="text-xl font-semibold">شلواری  که انتخاب کردی نشونه ی : {selections.pants}</p>
        <p className="text-xl font-semibold">کفشی که انتخاب کردی نشونه ی : {selections.shoes}</p>
        <p className="text-xl font-semibold">لباسی که انتخاب کردی نشونه ی : {selections.layer}</p>
      </div>
    </div>
  );
}

// Logic to calculate MBTI type based on selections
const getMBTI = (selections: Selections): string => {
  const traits = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  // Add logging to track trait values
  console.log("Initial Trait Values:", traits);

  if (selections.shirt === 'Casual T-shirt') traits.E++, traits.S++, traits.P++;
  if (selections.shirt === 'Button-up Shirt') traits.I++, traits.J++, traits.T++;
  if (selections.shirt === 'Graphic Tee') traits.E++, traits.N++, traits.F++;

  if (selections.pants === 'Jeans') traits.E++, traits.S++, traits.P++;
  if (selections.pants === 'Chinos') traits.I++, traits.J++, traits.T++;
  if (selections.pants === 'Joggers') traits.I++, traits.N++, traits.F++;

  if (selections.shoes === 'Sneakers') traits.E++, traits.S++, traits.P++;
  if (selections.shoes === 'Loafers') traits.I++, traits.J++, traits.T++;
  if (selections.shoes === 'Boots') traits.I++, traits.N++, traits.F++;

  if (selections.layer === 'Hoodie') traits.E++, traits.S++, traits.P++;
  if (selections.layer === 'Blazer') traits.I++, traits.J++, traits.T++;
  if (selections.layer === 'Denim Jacket') traits.E++, traits.N++, traits.F++;


  console.log("Final Trait Values:", traits);

  const mbtiType = (traits.E >= traits.I ? 'E' : 'I') + (traits.S >= traits.N ? 'S' : 'N') + (traits.T >= traits.F ? 'T' : 'F') + (traits.J >= traits.P ? 'J' : 'P');
  console.log("Calculated MBTI Type:", mbtiType);
  return mbtiType;
};

// Logic to map MBTI type to a celebrity
const celebrityMap: { [key: string]: string[] } = {
  'INTJ': ['Keanu Reeves', 'Alan Turing', 'Bruce Wayne (Batman)', 'Jane Austen', 'Marie Curie'],
  'INTP': ['Albert Einstein', 'Elon Musk', 'Sherlock Holmes', 'Ada Lovelace', 'Isaac Newton'],
  'ENTJ': ['Winston Churchill', 'Margaret Thatcher', 'Steve Jobs', 'Donald Trump', 'Julius Caesar'],
  'ENTP': ['Leonardo da Vinci', 'Nikola Tesla', 'Tony Stark (Iron Man)', 'Mark Twain', 'Amelia Earhart'],
  'INFJ': ['Carl Jung', 'Mother Teresa', 'Nelson Mandela', 'Eleanor Roosevelt', 'Martin Luther King Jr.'],
  'INFP': ['J.R.R. Tolkien', 'C.S. Lewis', 'Frida Kahlo', 'Walt Disney', 'Kurt Cobain'],
  'ENFJ': ['Oprah Winfrey', 'Mother Teresa', 'Nelson Mandela', 'Eleanor Roosevelt', 'Martin Luther King Jr.'],
  'ENFP': ['Robin Williams', 'Jim Carrey', 'Elizabeth Gilbert', 'Albert Einstein', 'Nikola Tesla'],
  'ISTJ': ['Captain America (Steve Rogers)', 'Beyoncé', 'Tom Hanks', 'Morgan Freeman', 'Angela Merkel'],
  'ISTP': ['James Bond', 'Han Solo', 'Bruce Lee', 'Scarlett Johansson', 'Keira Knightley'],
  'ESTJ': ['Donald Trump', 'Judge Judy', 'Steve Jobs', 'Margaret Thatcher', 'Winston Churchill'],
  'ESFP': ['Jim Carrey', 'Will Smith', 'Jennifer Lawrence', 'Britney Spears', 'Freddie Mercury'],
};
const getCelebrity = (mbtiType: string): string => {
  const celebrities = celebrityMap[mbtiType];
  if (!celebrities) {
    return 'A Mystery Celebrity';
  }

  const randomIndex = Math.floor(Math.random() * celebrities.length);
  return celebrities[randomIndex];
};