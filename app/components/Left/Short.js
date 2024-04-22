import {
  Button,
  ButtonGroup,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import CardDesign, { MyTabs } from "../Design";
import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
const info =
  " Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the ";
 
const languages = ["Hindi", "English", "Telugu"];
const MyIcons = [
  <SlSocialFacebook />,
  <FaInstagram />,
  <CiTwitter />,
  <CiYoutube />,
];

export default function Short({ title, content }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="shadow">
      <div className="p-4 flex justify-between items-center  bg-amber-50  rounded-md">
        <h1 className="text-lg font-medium">A Little About me </h1>
        <Button
          variant="outlined"
          size="sm"
          className="border border-green-600 rounded-md text-green-600 font-medium "
        >
          <span>Log In +</span>
        </Button>
      </div>
      <div className="p-4">
        <p className="text-gray-500 ">
          {readMore ? info : `${info.substring(0, 150)}...`}

          <button
            class="px-6 py-3 font-sans text-xs font-bold text-center  text-gray-900 capitalize align-middle rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  transition duration-300 ease-in-out"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <hr />
        <div className="flex mt-8 justify-between">
          <h3 className="text-xl tex ">Language spoke</h3>
          <div className="px-4">
            {languages.map((language) => {
              return (
                <Button
                  key={language}
                  className="capitalize m-2 rounded-2xl text-gray-950 font-medium bg-slate-100 shadow-none "
                  variant="filled"
                >
                  {language}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex ">
          {MyIcons.map((icons) => (
            <div
              key={icons}
              className="m-2 text-[28px] text-green-600 bg-slate-200 p-4 rounded-full border border-green-600 "
            >
              {icons}
            </div>
          ))}
          {/* ecn */}
        </div>
      </div>
    </div>
  );
}




