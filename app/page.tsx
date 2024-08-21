import Header from "./components/HeaderComponents/Header";
import TopBar from "./components/HeaderComponents/TopBar";
import Image from "next/image";
import Search from "./components/ReusableComponents/Search";
import Advantages from "./components/HomeSections/Advantages";
import NextTrip from "./components/HomeSections/NextTrip";
import StepByStep from "./components/HomeSections/StepByStep";
import Benefits from "./components/HomeSections/Benefits";
import Testimonials from "./components/HomeSections/Testimonials";
import PaymentMethods from "./components/HomeSections/PaymentMethods";
import Faqs from "./components/HomeSections/Faqs";
import FooterAbove from "./components/HomeSections/FooterAbove";
import Footer from "./components/HomeSections/Footer";


export default function Home() {
  return (<>
    <div className="h-screen flex flex-col">
      <TopBar />
      <Header />
      <div className='flex items-center flex-grow overflow-x-hidden'>
        <div className='flex flex-col w-1/2 px-64 justify-center'>
          <p className="text-text-faded">eSim Internacional</p>
          <h1 className="text-hero font-medium leading-body tracking-tight">
            <span className="whitespace-nowrap">Mantén tu conexión</span><br></br>
            <span className='font-bold text-primary whitespace-nowrap'>estés donde estés.</span>
          </h1>
          <p>¿Preparando tu próximo viaje? Con ViajareSIM, disfruta de internet de alta velocidad sin limites y olvidate de las costosas tarifas de roaming.</p>
          <Search/>
        </div>
        <div className="hidden lg:relative lg:translate-x-128 xl:translate-x-0 w-1/2 h-full scale-x-125">
        <Image
            src='/media/hero-section.png'
            alt='mano con celular'
            fill={true}
          />
        </div>
      </div>
    </div>
    <Advantages />
    <NextTrip />
    <StepByStep />
    <Benefits />
    <Testimonials />
    <PaymentMethods />
    <Faqs />
    <FooterAbove />
    <Footer />
  </>
  );
}