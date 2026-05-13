"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex justify-start p-2">
      <Link href={"/"}>
        <h1 className="inter text-2xl font-bold text-primary text-center">
          <span className="lobsterTwo text-3xl">
            D
          </span>
          istak
        </h1>
      </Link>
    </div>
  );
}
