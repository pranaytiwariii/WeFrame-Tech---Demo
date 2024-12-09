import { Navbar } from "@/components/layout/Navbar";
import { ProductDetail } from "@/components/product/ProductDetail";
import { SimilarProducts } from "@/components/product/SimilarProducts";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const sampleProduct = {
  images: [
    {
      id: 1,
      url: "/mainView.png",
      alt: "Main product view"
    },
    {
      id: 2,
      url: "/demoProduct.png",
      alt: "Demo product view"
    }
  ],
  name: "Cheese – appareil à raclette 1/2 roue",
  price: 39.50,
  description: "Location appareil à raclette - Raclette traditionnelle 1/2 roue\nRéglable en hauteur\nAppareil à raclette professionnel\nBoîtier de chauffe horizontal réglable en hauteur\n220V\n900W",
  reference: "WB8DNG"
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProductDetail {...sampleProduct} />
      <SimilarProducts />
      <RelatedProducts />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}