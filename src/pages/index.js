import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="box-content bg-sky-400 size-40 text-center flex items-center justify-center text-2xl font-semibold border-8 border-r-indigo-500 border-black">
        <p className="text-appGray-400">Box Content</p>
      </div>
    </>
  );
}
