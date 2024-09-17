import Image from "next/image";
import ImageButton from "./image-button";

type Selection = "Jeans" | "Chinos" | "Joggers";

type Selections = {
  pants: Selection | null;
};
function PantsSelection({
  onSelect,
}: {
  onSelect: (selection: Selection) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-two p-4">
      <h2 className="text-2xl font-bold mb-6 text-white text-center" dir="rtl">
        حالا بگو بهم که با کدوم یکی از این شلوار ها میخوای تو پاییز استایل بزنی
        ؟
      </h2>
      <div className="flex flex-row gap-4">
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amn4.webp"
          alt="Jeans"
          onClick={() => onSelect("Jeans")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen5.webp"
          alt="Chinos"
          onClick={() => onSelect("Chinos")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen6.webp"
          alt="Joggers"
          onClick={() => onSelect("Joggers")}
        />
      </div>
    </div>
  );
}
export default PantsSelection;
