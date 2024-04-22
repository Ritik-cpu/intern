"use client";
import Image from "next/image";
import { Banner } from "./components/Banner";
import CardDesign from "./components/Design";
import Short from "./components/Left/Short";
import Specialize from "./components/Left/Specialize";
import Concern from "./components/Left/Concern";
import Exprience from "./components/Left/Exprience";
import Featured from "./components/Left/Featured";
import Apoint from "./components/Right/Apoint";

export default function Home() {
  return (
    <main className="">
      <Banner />

      <div class=" mt-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        
        <div class="grid-item p-4">
          <Short />
          <Specialize/>
          <Concern/>
          <Exprience/>
          <Featured/>
        </div>
        <div class="grid-item p-4 ">
          <div className="border rounded-md p-4">

          <Apoint/>
          </div>
        </div>
      </div>
    </main>
  );
}
