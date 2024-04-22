import React from "react";
import CardDesign from "../Design";
import { MdOutlineHomeWork } from "react-icons/md";
const data = [
  {
    id: 1,
    title: "midtown medical clinic",
    text: "senior doctor",
    year: 2015,
  },
  {
    id: 2,
    title: "midtown medical clinic",
    text: "senior doctor",
    year: 2014,
  },
];
export default function Exprience() {
  return (
    <div>
      <CardDesign
        title={"my work experience"}
        content={
          <div>
            <h2 className="font-lg text-green-600 font-medium uppercase">
              i have been in practice for 7+ years
            </h2>
            <hr />
            <div className="p-2">
              {data.map((d) => {
                const { id, title, text, year } = d;
                return (
                  <div className="flex justify-between" key={id}>
                    <div className="flex items-center" >
                      <MdOutlineHomeWork className="text-3xl p-2 rounded-md bg-slate-200 text-blue-600"/>
                      <div className="p-2 ">
                        <p className="text-lg capitalize text-nowrap">{title}</p>
                        <p className="text-gray-400">{text}</p>
                      </div>
                    </div>
                    <div>
                      <p>{year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      />
    </div>
  );
}
