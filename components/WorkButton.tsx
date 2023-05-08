"use client";

export default function WorkButton() {
  return (
    <div className="">
      <button
        onClick={() =>
          document.getElementById("work")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
        className="rounded border border-primary px-6 py-4 font-code text-sm text-primary"
      >
        Check out my work!
      </button>
      <div></div>
    </div>
  );
}
