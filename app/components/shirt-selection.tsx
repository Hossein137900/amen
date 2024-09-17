import Image from "next/image";
import ImageButton from "./image-button";
type Selection = "Casual T-shirt" | "Button-up Shirt" | "Graphic Tee";

type Selections = {
  shirt: Selection | null;
};
function ShirtSelection({
  onSelect,
}: {
  onSelect: (selection: Selection) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-one p-4">
      <h2 className="text-2xl font-bold mb-6 text-white text-center" dir="rtl">
        یکی از لباس های زیر و انتخاب کن تا بت بگم سلیقت شبیه کیه !
      </h2>
      <div className="flex flex-row gap-4 ">
        <ImageButton
          src="/assets/images/amen1.webp"
          alt="Casual T-shirt"
          onClick={() => onSelect("Casual T-shirt")}
          className="bg-[accent-color] rounded hover:opacity-80 p-4 " // Added custom class for button styling
        />
        <ImageButton
          src="/assets/images/amen2.webp"
          alt="Button-up Shirt"
          onClick={() => onSelect("Button-up Shirt")}
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
        />
        <ImageButton
          src="/assets/images/amen3.webp"
          alt="Graphic Tee"
          onClick={() => onSelect("Graphic Tee")}
          className="bg-[accent-color] rounded hover:opacity-80 p-4"
        />
      </div>
    </div>
  );
}
export default ShirtSelection;
