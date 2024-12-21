import { Appointment } from "@/Components/appointment";
import { Autonumber } from "@/Components/autonumber";
import { Cards } from "@/Components/cards";
import EmergencyMedicalCare from "@/Components/emergencycaresection";
import Footer from "@/Components/footer";
import { Header } from "@/Components/header";
import { HeaderSectionTwo } from "@/Components/headersectiontwo";
import InfoCards from "@/Components/mainslider";
import { Manageserivce } from "@/Components/managementserivce";
import { Offer } from "@/Components/offer ";
import { Other } from "@/Components/other";
import { Provide } from "@/Components/provide";
import { SignUp } from "@/Components/signup";
import { SliderImg } from "@/Components/sliderimg";
import HeroSection from "@/Components/text";
import { Video } from "@/Components/video";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderSectionTwo />
      <HeroSection />
      <InfoCards />
      <Manageserivce />
      <Autonumber />
      <Video />
      <EmergencyMedicalCare />
      <SliderImg />
      <Offer />
      <Provide />
      <Cards />
      <Other />
      <Appointment />
      <SignUp />
      <Footer />
    </>

  );
}
