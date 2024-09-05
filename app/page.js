import AboutSection from "@/component/about/AboutSection";
// import ActivitySection from "@/component/activity/ActivitySection";
import BannerSection from "@/component/banner/BannerSection";
import BlogSection from "@/component/blog/BlogSection";
import CategorySection from "@/component/category/CategorySection";
import EventSection from "@/component/event/EventSection";
import FaqSection from "@/component/faq/FaqSection";
import FooterSection from "@/component/footer/FooterSection";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
// import TestimonialSection from "@/component/testimonial/TestimonialSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoSection from "@/component/video/VideoSection";
// import WorkSection from "@/component/work/WorkSection";

export const metadata = {
  title: "Colegio Fontaine",
  description: "Colegio La Fontaine es una institución educativa de preescolar y primaria fundada en el año 2016 con el sueño de brindar a niños y niñas de la Comuna 20 de Cali la oportunidad de acceder a educación de alta calidad a bajo costo dentro de su propio territorio y al alcance de los ingresos económicos de las familias.",
};



export default function Home() {
  return (
    <>
      <NavbarSection style="" logo="images/Logo-La-fontaine-blanco.svg" />
      <BannerSection />
      <CategorySection />
      <AboutSection />
      <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} />
      <FaqSection img="images/portada-spotofy.webp" />
      {/* <WorkSection /> */}
      {/* <TestimonialSection /> */}
      {/* <ActivitySection /> */}
      <VideoSection />
      <BlogSection />
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="" />
    </>
  );
}
