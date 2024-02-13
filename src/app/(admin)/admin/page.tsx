import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-center font-medium text-2xl">
        Welcome in Admin Page
      </h1>
      {/* Tables */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="font-normal text-2xl text-red-500">Categories</h1>
        <div className="mt-1 ml-1 flex flex-col gap-2 text-xl">
          <Link href={`/admin/food`} className="underline">
            Food Item
          </Link>
          <Link href={`/admin/category`} className="underline">
            Food Category
          </Link>
        </div>
      </div>
    </div>
  );
}
