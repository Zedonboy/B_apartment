import SearchItem from "../components/SearchItem";

export default function Search() {
  return (
    <>
      <nav className="flex shadow items-center justify-between w-full z-10 px-2 md:px-24 fixed top-0 right-0 left-0 bg-white  py-6 text-black">
        <span>Logo</span>
        <ul className="flex space-x-4">
          <li className="font-bold ">
            <a>Create Account/Login</a>
          </li>
          <li className="font-bold">
            <a>Properties</a>
          </li>
        </ul>
      </nav>
      <section className="flex w-full space-x-3 mt-24 justify-center">
          <select className="form-select rounded">
              <option>Abuja, Nigeria</option>
          </select>
          <select className="form-select rounded">
              <option hidden>Price</option>
          </select>
          <select className="form-select rounded">
              <option hidden>Beds</option>
          </select>
          <select className="form-select rounded">
              <option hidden>Type</option>
          </select>
          <select className="form-select rounded">
              <option hidden>LifeStyle</option>
          </select>
          <select className="form-select rounded">
              <option hidden>Move in date</option>
          </select>

          <select className="form-select rounded">
              <option hidden>More</option>
          </select>
          <button className="p-2 border-2 rounded border-green-600">
              Sort
          </button>
      </section>
      <section className="flex">
          <section className="w-7/12"></section>
          <section className="w-5/12 mt-4 px-4">
              <SearchItem/>
          </section>
      </section>
    </>
  );
}
