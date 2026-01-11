import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-[#03001427]
        backdrop-blur-xl
        border-t border-white/10
        text-gray-200
        px-6 py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm text-white/70">
          &copy; Vaishnavi Gaikwad {new Date().getFullYear()} Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
