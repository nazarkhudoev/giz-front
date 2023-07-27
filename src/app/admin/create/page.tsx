"use client";
import Link from "next/link";
import { useState } from "react";

export default function CreateProject() {
  const [englishName, setEnglishName] = useState<string>("");
  const [englishCategory, setEnglishCategory] = useState<string>("");
  const [englishDescription, setEnglishDescription] = useState<string>("");
  const [file, setFile] = useState("");
  const [banner, setBanner] = useState<any>("");

  const [tajikName, setTajikName] = useState<string>("");
  const [tajikDescription, setTajikDescription] = useState<string>("");

  const [isSaved, setIsSaved] = useState<boolean>(false);

  const getBanner = () => {};
  const getFile = () => {};

  function handleSubmit(e: any) {
    e.preventDefault();

    const newProject = {
      name_en: englishName,
      category_en: englishCategory,
      description_en: englishDescription,
      file: file,
      name_tj: tajikName,
      category_tj: tajikDescription,
    };

    console.log(newProject);
    setIsSaved(true);
  }

  return (
    <div className="bg-[#D3D3D3] px-24 py-12">
      <div>
        <h3>PROJECTS DETAILS</h3>
        <div className="divider">EN</div>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              value={englishName}
              onChange={(e) => setEnglishName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Category*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Describe the project..."
              value={englishCategory}
              onChange={(e) => setEnglishCategory(e.target.value)}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              value={englishDescription}
              onChange={(e) => setEnglishDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Banner*</label>
            <span>1362x450</span>
            <div className="flex items-center gap-5 mt-3 rounded-[5px]">
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Browse File
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={banner}
                onChange={getBanner}
                // onChange={(e) => setFile(e.target.value)}
              />
              <span>filename.png</span>
            </div>
          </div>
        </section>
        <div className="my-2">
          <div className="divider">TJ</div>
        </div>
        <section className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              value={tajikName}
              onChange={(e) => setTajikName(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Category*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Describe the project..."
            />
          </div> */}
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              value={tajikDescription}
              onChange={(e) => setTajikDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        <div className="mt-5 flex items-center justify-end gap-10">
          <Link
            href={"/admin"}
            className="w-[140px] h-[50px] bg-[#C30F08] text-white uppercase rounded-[5px] flex items-center justify-center"
          >
            cancel
          </Link>
          <button className="w-[140px] h-[50px] bg-[#C30F08] text-white uppercase rounded-[5px]">
            save
          </button>
        </div>

        {isSaved == true && (
          <>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[24px] font-medium mb-2 uppercase">
                Documents (only pDF)
              </label>
              <span className="text-sm text-gray-500 mb-3">max size 2 mb</span>
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Add
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={file}
                onChange={getFile}
                // onChange={(e) => setFile(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-start mt-[100px]">
              <label className="text-[24px] font-medium mb-2 uppercase">
                media files (png, jpg)
              </label>
              <span className="text-sm text-gray-500 mb-3">max size 2 mb</span>
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Choose photo
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={file}
                onChange={getFile}
                // onChange={(e) => setFile(e.target.value)}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
