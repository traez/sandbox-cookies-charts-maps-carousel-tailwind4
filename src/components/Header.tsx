import Link from "next/link";

export default async function Header() {
  return (
    <nav className="flex flex-col justify-center items-center gap-1 md:flex-row md:justify-between py-1 px-4 border-b-2 border-gray-800 bg-[#CCC5BD] text-black w-full max-w-[1440px]">
      <menu className="flex justify-start">
        <Link
          href="/"
          className="flex items-center self-center text-2xl font-semibold whitespace-nowrap  hover:text-blue-900"
        >
          Sandbox 5
        </Link>
      </menu>
      <aside className="flex justify-center items-center gap-2 md:gap-4">
        <Link
          href="/jscookie"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          JsCookie
        </Link>
        <Link
          href="/chart"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          Chart
        </Link>
        <Link
          href="/maps"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          Maps
        </Link>
        <Link
          href="/carousel"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          Carousel
        </Link>
      </aside>
    </nav>
  );
}
