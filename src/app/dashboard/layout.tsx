import Navbar from "@/components/dashboard/navbar"
import Menu from "@/components/dashboard/Menu";
import BackButton from "@/components/utils/backbutton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <BackButton />
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <p className="text-2xl font-bold font-mc">Dashboard</p>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
