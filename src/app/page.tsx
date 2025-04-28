import Banner from "@/_components/Banner/Banner";
import Contatos from "@/_components/Contatos/Contatos";
import Convenios from "@/_components/Convenios/Convenios";
import Footer from "@/_components/Footer";
import Navbar from "@/_components/menu/Navbar";
import WaveDivider from "@/_components/Onda/WaveDivider";
import Porque from "@/_components/Porque/Porque";
import QuemSomos from "@/_components/QuemSomos/QuemSomos";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Banner />
      <WaveDivider />
      <QuemSomos />
      <Porque />
      <WaveDivider />
      <Convenios />
      <Contatos />
      <Footer />
      
    </>
  );
}
