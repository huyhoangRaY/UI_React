export const UserProfile = () => {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
      <img
        src="https://placewaifu.com/image/200"
        className="w-32 self-start rounded-full border-[#E6EFFA] border-[11]"
        alt=""
      />
      <div className="space-y-7 text-[#1C2B62]">
        <h1 className="text-3xl font-bold">David Grant</h1>
        <h2 className="mt-1">3D Artist</h2>

        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline-block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            4.7 Rating
          </p>
          <p>4,447 Reviews</p>
          <p>478 Students</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          optio. In, itaque laboriosam? Commodi, ipsam consequuntur quasi illum
          pariatur, eaque fugiat id cum, odio vero molestiae deserunt ullam ex
          aut.
        </p>
      </div>
    </div>
  );
};
