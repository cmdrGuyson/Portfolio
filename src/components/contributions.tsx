import data from "../constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Contributions() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-gray-600">
            Contributions
          </h1>
        </header>
        <p className="mt-8 md:mt-12 text-center text-base md:text-lg">
          Some of the projects I have helped build
        </p>
        <div className="bg-gray-900 mt-8 md:mt-12">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto [&>*:last-child:nth-child(3n-1)]:md:col-start-2 [&>*:last-child:nth-child(3n-2)]:md:col-span-3">
              {data.contributions.map((contribution, idx) => (
                <ContributionLogo
                  key={idx}
                  title={contribution.title}
                  img={contribution.img}
                  url={contribution.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContributionLogoProps {
  title: string;
  img: string;
  url: string;
}

const ContributionLogo = ({ title, img, url }: ContributionLogoProps) => {
  const isDifferentLogo = img.includes("different.svg");

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full aspect-[3/1] flex items-center justify-center hover:opacity-80 transition-opacity duration-200 ${
        isDifferentLogo ? "max-w-[200px]" : "max-w-[300px]"
      } mx-auto`}
    >
      <div className="relative w-full h-full p-4">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>
    </Link>
  );
};
