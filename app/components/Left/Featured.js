"use client";

import React from "react";
import CardDesign from "../Design";
import AvatarImg from "../../../public/asset/avatar.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "alicent hightower",
    subtitle: "consulted for skin care",
    year: "20 january 2023",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
  },
  {
    id: 2,
    title: "alicent hightower",
    subtitle: "consulted for skin care",
    year: "20 january 2023",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
  },
];
export default function Featured() {
  return (
    <div>
      <CardDesign
        title={"featured review (102)"}
        content={
          <div>
            {data.map((d) => {
              const { id, title, subtitle, review, year } = d;
              return (
                <Card key={id} className="pt-4" color="transparent">
                  <CardHeader className="m-0 flex rounded-none">
                    <Image
                      alt="user 5"
                      src={AvatarImg}
                      class="relative inline-block mx-2 h-[54px] w-[56px]  !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />

                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography className="text-lg capitalize ">
                          {title}
                        </Typography>
                        <div className="5 flex items-center gap-0">{year}</div>
                      </div>
                      <Typography className="capitalize text-gray-400">
                        {subtitle}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                    <div className="flex pt-4">
                    {[1, 2, 3, 4, 5].map((index) => {
                      return(
                        <div key={index}>

                          <FaStar  className="text-yellow-500" />
                        </div>
                      )
                    })}
                    </div>
                 
                    <Typography className=" ">{review}</Typography>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        }
      />
    </div>
  );
}
