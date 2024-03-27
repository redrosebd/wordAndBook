import Navbar from "@/app/components/Navbar/Navbar";
import getBook from "../../../../lib/getBook";
import Link from "next/link";
import Ebook from "./../../Ebook/page";





export default async function singleBook() {

  const bookData = await getBook() ;
  const allChapters = bookData?.success?.data?.chapters?.data;
 
  


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
          {
              allChapters?.map( chapter => <li key={chapter?.id}><Link  href={`./${chapter?.id}`}>{chapter?.title}</Link></li>)
            }
            
          </ul>
        </div>
        {/* -----------Content ---------------- */}
        <div className="w-12/12 lg:w-9/12">
         <Ebook> </Ebook>
        </div>
      </div>
    </main>
  );
}
