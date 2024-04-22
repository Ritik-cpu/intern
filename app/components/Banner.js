"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import banner from "../../public/asset/banner.png";
import AvatarImg from "../../public/asset/avatar.png";
export function Banner() {
  return (
    <Card className="mt-12 shadow container mx-auto  max-w-6xl ">
      <CardHeader className="m-0 rounded-none">
        <Image
          src={banner}
          style={{
            width: "100%",
            height: "168px",
          }}
          height={100}
        />
      </CardHeader>
      <CardBody className="p-4 bg-amber-50">
        <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="grid-item flex p-4">
            <Image
              alt="user 5"
              src={AvatarImg}
              class="relative inline-block h-[159px] w-[159px] mt-[-64px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
            />
            <div>
              <h4 className="text-lg">Dr. Bruce Wills</h4>
              <h5 className="text-green-600 text-md">Gynecologist</h5>
              <p className="text-gray-600 text-sm mt-2">4.2 ****</p>
            </div>
          </div>
          <div class="grid-item flex justify-between text-center p-4">
            <div>
              <p>Folowers</p>
              <p>580</p>
            </div>
            <div>
              <p>Following</p>
              <p>58k</p>
            </div>
            <div>
              <p>Post</p>
              <p>580</p>
            </div>
            <p></p>
          </div>
          <div class="grid-item p-8">
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="bg-green-600 font-medium w-full text-gray-50 rounded-md"
            >
              <span>Book an Apointment</span>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
