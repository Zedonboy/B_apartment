/* eslint-disable @next/next/no-img-element */
export default function Showcase({img_url}) {
    return (
        <div className="w-full md:w-1/5 flex-shrink-0 p-6">
              <div className="filter grayscale overflow-hidden hover:grayscale-0 rounded-2xl shadow-xl duration-500 w-full ease-in-out transition-transform h-48 transform scale-100 hover:scale-125">
                <img
                  alt="cscs"
                  className="w-full h-full object-cover"
                  src={img_url}
                ></img>
              </div>
            </div>
    )
}