import Image from "next/image";
import ImageButton from "./image-button";

type Selection = "Sneakers" | "Loafers" | "Boots";

type Selections = {
  shoes: Selection | null;
};
function ShoesSelection({
  onSelect,
}: {
  onSelect: (selection: Selection) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-one p-4">
      <h2 className="text-2xl font-bold mb-6 text-white text-center" dir="rtl">
        کدوم یکی از این کفش ها روحتو تو پاییز راضی میکنه ؟
      </h2>
      <div className="flex flex-row gap-4">
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen7.webp"
          alt="Sneakers"
          onClick={() => onSelect("Sneakers")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen8.webp"
          alt="Loafers"
          onClick={() => onSelect("Loafers")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen9.webp"
          alt="Boots"
          onClick={() => onSelect("Boots")}
        />
      </div>
    </div>
  );
}
export default ShoesSelection;
