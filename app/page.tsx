import Image from "next/image";

const IMAGE_SIZE = 60;

export default function Home() {
  return (
    <div className="bg-dark p-8 font-sans">
      <div className="flex justify-between items-start">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="flex items-center">
          <div className="text-xs font-code">
            <span className="text-primary">01. </span>
            <span className="text-white">About</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">02. </span>
            <span className="text-white">Experience</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">03. </span>
            <span className="text-white">Work</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">04. </span>
            <span className="text-white">Contact</span>
          </div>
          <p className="p-4"></p>
          <button className="border border-primary text-primary text-sm rounded px-3 py-2 font-code">
            Resume
          </button>
        </div>
      </div>
      <div>Main</div>
    </div>
  );
}
