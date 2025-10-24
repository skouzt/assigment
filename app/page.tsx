import Profile from "@/components/Profile";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <main className="flex min-h-screen">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="w-full md:w-1/2 p-4 sm:p-8 flex justify-center md:justify-start">
          <div className="w-full max-w-lg md:max-w-xl flex flex-col space-y-8">
            <Profile />
            <Gallery />
          </div>
        </div>
      </main>
    </div>
  );
}
