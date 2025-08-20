import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full mx-auto items-center justify-center">
      <div className="flex gap-10 text-center divide-gray-600">
        <div className="text-3xl">404</div>
        <div className="w-0.25 h-10 bg-gray-500"></div>
        <div>
          <p className="pb-3">This page could not be found</p>
          <Button><Link href="/">Return Home</Link></Button>
        </div>
      </div>
    </div>
  );
}
