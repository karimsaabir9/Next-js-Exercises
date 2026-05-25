import { Suspense } from "react";
import SlowComponent from "./components/SlowComponent";

const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-6 w-52 bg-gray-300 rounded-md"></div>

      <div className="h-4 w-72 bg-gray-300 rounded-md"></div>

      <div className="h-4 w-64 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Suspense + Skeleton
      </h1>

      <Suspense fallback={<Skeleton />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
