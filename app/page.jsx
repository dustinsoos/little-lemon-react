import Image from "next/image";

export default function Home() {
  return (
    <main className=" container mx-auto">
      <div className="mt-6">
        {/* <Image className="" src="/images/icons_assets/Logo.svg" width={300} height={300}></Image> */}
        <nav className=" flex justify-between">
          <Image src="/images/icons_assets/icon_hamburger-menu.svg" width={30} height={30} className=" cursor-pointer"></Image>
          <Image src="/images/icons_assets/Basket.svg" width={30} height={30}></Image>
        </nav>
      </div>
    </main>
  );
}
