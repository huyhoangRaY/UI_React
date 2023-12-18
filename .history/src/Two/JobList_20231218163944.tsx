export const JobList = () => {
  return (
    <div className="w-[40rem] bg-white p-16">
      <div className="relative">
        <input
          type="text"
          className="mr-2 w-full rounded-md border-gray-300 px-4 py-2"
          placeholder="Search"
        />
        <button className="hover:bg-blue rounded-md bg-blue-500 px-4 py-2 text-white"></button>
      </div>
    </div>
  );
};
