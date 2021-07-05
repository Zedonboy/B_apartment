/* eslint-disable @next/next/no-img-element */
export default function FeatureCard({img_url, title, desc}) {
  return (
    <div className="w-full md:w-1/3 p-4 flex items-start">
      <figure>
        <img alt="icon" className=" w-16 h-auto" src={img_url} />
      </figure>

      <div className="ml-4">
        <p className="font-bold text-gray-700 text-2xl">{title}</p>
        <p className=" text-base text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  );
}
