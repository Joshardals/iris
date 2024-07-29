import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Image
        alt="Logo"
        className=" size-8"
        height={50}
        src="/assets/Logo.png"
        width={50}
      />
      <h2 className="font-bold text-lg font-sans">Iris Investment</h2>
    </div>
  );
}
