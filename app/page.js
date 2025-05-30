import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="upperPart h-[50vh] flex flex-row items-center justify-around bg-gradient-to-r from-pink-500 to-violet-500 text-white">
        <div className="flex flex-col items-start justify-center w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Hello! Welcome to CutyourUrl
          </h1>
          <p className="text-lg">
            We are the best one. We dont waste your time by mske your login or
            signup. We respect your privacy. We dont need any of your data. This
            the best free to use Url-shortner app you can find.🤟🫡
          </p>
        </div>
        <div className="buttons flex space-x-2">
          <Link
            href="/shorten"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Try Now
          </Link>
          <Link
            href="/github"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Github
          </Link>
        </div>
      </div>

      {/* lower part */}
      <div className="lowerPart flex flex-col items-center justify-center  bg-gray-100">
        <Image
          src="/images/lowerpart.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="p-4 rounded-lg shadow-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <Footer />
    </div>
  );
}
