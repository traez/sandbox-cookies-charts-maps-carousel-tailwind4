import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chart Sandbox",
  description: "Created by Trae Zeeofor",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col justify-between items-center">
        <nav className="flex flex-row justify-center items-center gap-4 bg-white p-4 shadow-md">
          <Link
            href="/chart/pie"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Pie Chart
          </Link>
          <Link
            href="/chart/bar"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Bar Chart
          </Link>
          <Link
            href="/chart/line"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Line Chart
          </Link>
        </nav>
        <div className="py-[2rem]">{children}</div>
      </section>
    </>
  );
}
