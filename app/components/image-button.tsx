import Image from "next/image";

function ImageButton({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  className: string;
}) {
  return (
    <button className="flex flex-col items-center m-4 hover:animate-pulse " onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="rounded-xl basis-1/4 shadow-lg hover:scale-105 transition duration-700 hover:blur-sm hover:skew-y-2 ease-in-out drop-shadow-2xl"
      />
      <p className="mt-4 text-lg font-semibold  text-white shadow  hover:shadow-2xl hover:transition duration-700">{alt}</p>
    </button>
  );
}
export default ImageButton;
