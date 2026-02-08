"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex justify-start p-2">
      <Link href={"/"}>
        <h1 className="inter text-2xl font-bold text-white text-center">
          <span className="text-3xl text-primary transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-x-1">
            D
          </span>
          istak
        </h1>
      </Link>
    </div>
  );
}
