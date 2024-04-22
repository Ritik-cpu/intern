import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";
export default function Apoint() {
  return (
    <div>
      <button
        class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        filled
      </button>

      <hr />
      <p>select your mode of session</p>
      <TabsDefault />
    </div>
  );
}

function TabsDefault() {
  const [isActive, setIsActive] = useState(0);

  const data = [
    {
      label: "In-Clinic",
      value: "in-clinic",
      time: "45 mins",
    },
    {
      label: "Video",
      value: "video",
      time: "45 mins",
    },
    {
      label: "Chat",
      value: "chat",
      time: "45 mins",
    },
  ];

  return (
    <Tabs value="html">
      <TabsHeader className="">
        {data.map(({ label, time, value }) => (
          <Tab
            onClick={() => {
              setIsActive(value);
            }}
            key={value}
            value={value}
          >
            <div
              className={`flex items-center p-4 border border-gray-300 rounded-lg ${
                value === isActive ? "text-green-700 bg-green-50" : ""
              }`}
            >
              {label}
              <FaCheckCircle
                className={`m-1  ${value === isActive ? "block" : "hidden"}`}
              />
            </div>
            <p className="text-center">{time}</p>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}


//  function Apointment() {
//     const [active, setActive] = useState(0);
//   return (
//     <div>
//          <Tabs value="html">
//       <TabsHeader className="">
//         {data.map(({ label, time, value }) => (
//           <Tab
//             onClick={() => {
//               setActive(value);
//             }}
//             key={value}
//             value={value}
//           >
//             <div
//               className={`flex items-center p-4 border border-gray-300 rounded-lg ${
//                 value === isActive ? "text-green-700 bg-green-50" : ""
//               }`}
//             >
//               {label}
//               <FaCheckCircle
//                 className={`m-1  ${value === isActive ? "block" : "hidden"}`}
//               />
//             </div>
//             <p className="text-center">{time}</p>
//           </Tab>
//         ))}
//       </TabsHeader>
//     </Tabs>
//     </div>
//   )
// }

