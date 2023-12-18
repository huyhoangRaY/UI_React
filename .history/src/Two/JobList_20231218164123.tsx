export const JobList = () => {
  return (
    <div className="w-[40rem] bg-white p-16">
      <div className="relative">
        <input
          type="text"
          className="mr-2 w-full rounded-md border-gray-300 px-4 py-2 pl-10"
          placeholder="Search for a part-time job"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <button className="hover:bg-blue rounded-md bg-blue-500 px-4 py-2 text-white"></button>
      </div>
    </div>
  );
};
