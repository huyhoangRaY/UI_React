export const JobList = () => {
  return (
    <div className="w-[40rem] rounded-md bg-white p-16">
      <div className="flex">
        <div className="relative rounded-md border-2 border-gray-300">
          <input
            type="text"
            className="mr-2 w-full px-4 py-2 pl-10"
            placeholder="Search for a part-time job"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <button className="hover:bg-blue rounded-md bg-[#281A51] px-4 py-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
};
