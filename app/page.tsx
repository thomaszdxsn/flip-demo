import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center">
      <div className="grid h-[50vh] w-[50vw] grid-cols-1 place-items-center bg-white">
        <Link
          href="/flip-demo"
          className="grid h-full w-full place-content-center hover:bg-blue-100"
        >
          Flip DEMO
        </Link>

        <Link
          href="/framer-demo"
          className="grid h-full w-full place-content-center hover:bg-blue-100"
        >
          Framer DEMO
        </Link>

        <Link
          href="/view-transition-demo"
          className="grid h-full w-full place-content-center hover:bg-blue-100"
        >
          View Transition DEMO
        </Link>
      </div>
    </main>
  );
}
