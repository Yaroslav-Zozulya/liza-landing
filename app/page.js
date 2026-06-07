import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Club from "@/components/Club/Club";
import Inside from "@/components/Inside/Inside";
import Video from "@/components/Video/Video";
import Gallery from "@/components/Gallery/Gallery";
import Pricing from "@/components/Pricing/Pricing";
import Individual from "@/components/Individual/Individual";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <About />
      <Club />
      <Inside />
      <Video />
      <Gallery />
      <Pricing />
      <Individual />
      <Footer />
    </main>
  );
}
