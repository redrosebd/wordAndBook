import Ebook from "../app/Ebook/page";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      {/* ------------ ------------ Main Content ------------------------*/}
      <div className="flex w-12/12 justify-between gap-4 mt-3">
        {/* -------------Content Menu------------- */}
        <div className="w-3/12">
          <h2 className="bg-[#075F8F] font-bold text-[22px] text-white px-2 py-1">Chapters</h2>
         <ul>
           <li></li>
         </ul>
        </div>
        {/* -----------Content ---------------- */}
        <div className="w-9/12">
          <Ebook />
        </div>

      </div>
    </main>
  );
}
