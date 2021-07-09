/* eslint-disable @next/next/no-img-element */
export default function SearchItem() {
  return (
    <section className="flex w-full flex-col">
      <div className="bg-gray-300 flex items-center justify-between p-2 rounded">
        <div className="text-[#439a82]">
          <p className="font-bold">Abuja</p>
          <p className="text-sm">Abuja</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <section className="w-full flex mt-2">
        <figure className="w-1/2 overflow-hidden shadow rounded-2xl">
          <img
            alt
            className="h-full rounded-2xl w-full object-cover"
            src="/images/freshama.png"
          />
        </figure>
        <section className="w-1/2 p-4">
          <section className="bg-gray-300 p-4 text-[#439a82] rounded-md h-full">
            <p className="font-bold text-xs">New</p>
            <p className="font-bold text-xs">$1,390 - 2,395</p>
            <p className="font-light text-xs mt-4">Studio - 1 Bed Avail. Now</p>
            <p className="text-xs">
              Dog Friendly Cat Friendly Air Conditioning Washer/Dryer - In Unit
              Dishwasher
            </p>
            <section className="flex mt-3 items-center space-x-2">
                <img src="/images/icons/phone.png"/>
                <p className="text-xs">+23481-240-1135</p>
                <button className="bg-[#439a82] text-white rounded p-2">
                    Email
                </button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
