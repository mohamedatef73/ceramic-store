import Camp from "../components/Camp";
import Guid from "../components/Guid";
import Heros from "../components/Heros";
import Carousel from "../components/Carousel";
import CardProducts from "../components/CardProducts"

export default function Home() {
  return (
    <>
      <Carousel />

      <Heros />
      <Camp />
      <Guid />
      {/* <CardProducts/> */}

    </>
  );
}
