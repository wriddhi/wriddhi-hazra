import Link from "next/link";
import React from "react";
import { BsCloudDownload } from "react-icons/bs";

const page = () => {
  return (
    <main className="h-full w-full overflow-x-hidden flex-1 grid place-items-center">
      <Link
        className="bg-white px-6 py-2 rounded-md text-2xl text-black font-bold"
        download={true}
        href="/Wriddhi Hazra - Resume (20th Sept).pdf"
      >
        Download Resume <BsCloudDownload className="inline ml-2" />
      </Link>
    </main>
  );
};

export default page;
