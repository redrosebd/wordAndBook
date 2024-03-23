import Ebook from "../app/Ebook/page";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      {/* ------------ ------------ Main Content ------------------------*/}
      <div className="flex flex-col lg:flex-row w-12/12 justify-between gap-4 mt-3">
        {/* -------------Content Menu------------- */}
        <div className="w-12/12 lg:w-3/12 hidden lg:block">
          <h2 className="bg-[#075F8F] font-bold text-[22px] text-white px-2 py-1">
            Chapters
          </h2>
          <ul className=" bg-[#dbeafeb0]  pb-10 chapters ">
            <li>Chapter One</li>
            
          </ul>
        </div>
        {/* -----------Content ---------------- */}
        <div className="w-12/12 lg:w-9/12">
          <Ebook />
        </div>
      </div>
    </main>
  );
}
