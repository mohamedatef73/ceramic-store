import Camp from "../components/Camp";
import Guid from "../components/Guid";
import Heros from "../components/Heros";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />

      <Heros />
      <Camp />
      <Guid />
    </>
  );
}
