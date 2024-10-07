import Camp from "../components/Camp";
import Guid from "../components/Guid";
import GetApp from "../components/GetApp";
import Features from "../components/Features";
import Heros from "../components/Heros";
import { Router } from "next/router";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />

      <Heros />
      <Camp />
      <Guid />
      {/* <GetApp />
      <Features /> */}
    </>
  );
}
