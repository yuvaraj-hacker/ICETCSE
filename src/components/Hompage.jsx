import HeroSection from "../shared/components/Home/Herosection";
import HelmetComponent from "./HelmetComponent";


export default function Hompage() {
  return (
    <>
      <HelmetComponent title={'Home - International Conference on Advances in Computer Science and Information Technology'} canonical={'https://icacsit.com/'} />
      <HeroSection />
    </>
  );
}
