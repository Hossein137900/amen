import Image from "next/image";
import ImageButton from "./image-button";

type Selection = "Hoodie" | "Blazer" | "Denim Jacket";

type Selections = {
  layer: Selection | null;
};
function LayerSelection({
  onSelect,
}: {
  onSelect: (selection: Selection) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-two p-4">
      <h2 className="text-2xl font-bold mb-6 text-white text-center" dir="rtl">
        سوال اخرمم اینه که ایتم مورد علاقت برای پاییز چیه ؟؟
      </h2>
      <div className="flex flex-row gap-4">
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen10.webp"
          alt="Hoodie"
          onClick={() => onSelect("Hoodie")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen11.webp"
          alt="Blazer"
          onClick={() => onSelect("Blazer")}
        />
        <ImageButton
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
          src="/assets/images/amen11.webp"
          alt="Denim Jacket"
          onClick={() => onSelect("Denim Jacket")}
        />
      </div>
    </div>
  );
}
export default LayerSelection;
