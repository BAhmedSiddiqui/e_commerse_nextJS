import Image from "next/image";
import ProductList from "./components/productList/productlist";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList />
    </div>
  );
}
