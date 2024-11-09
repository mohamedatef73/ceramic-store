import Camp from "../components/Camp";
import Guid from "../components/Products";
import Heros from "../components/Heros";
import Carousel from "../components/Carousel";
import Products from "../components/Products"

export default function Home() {
  return (
    <>
      <Carousel />

      <Heros />
      <Camp />
      <Products />
      {/* <CardProducts/> */}

    </>
  );
}
