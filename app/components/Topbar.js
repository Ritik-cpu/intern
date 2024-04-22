"use client"
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Mylogo from '../../public/asset/logo.png'
 
const pages = ["Home", "Find Docotor", "About Us"];
export function Topbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {`1`
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     {pages.map((page) =>(
      <Typography
      key={page}
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
      
        
             <a href="#"  className="flex items-center">
            {page}
           </a>
      
       
      </Typography>
       ) )}
    </ul>
  );
 
  return (
    <Navbar className="mx-auto text-gray-950 bg-amber-50 w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
         <Image alt="logo" src={Mylogo} width={259} height={49} />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
         
          <Button fullWidth variant="outlined" size="sm" className=" hidden lg:inline-block border border-green-600 rounded-md text-green-600 font-medium ">
              <span>Log In</span>
            </Button>
            
            <Button fullWidth variant="gradient" size="sm" className=" hidden lg:inline-block whitespace-nowrap bg-green-600 font-medium text-gray-50 rounded-md">
              <span>Sign in</span>
            </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="outlined" size="sm" className="border border-green-600 rounded-md text-green-600 font-medium ">
              <span>Log In</span>
            </Button>
            
            <Button fullWidth variant="gradient" size="sm" className="bg-green-600 font-medium text-gray-50 rounded-md">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}