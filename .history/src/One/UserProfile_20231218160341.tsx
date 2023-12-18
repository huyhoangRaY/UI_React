export const UserProfile = () => {
  return (
    <div className="flex w-[36rem] rounded-lg bg-white p-12">
      <img
        src="https://placewaifu.com/image/200"
        className="w-32 gap-x-4  self-start rounded-full border-[#E6EFFA] border-[11]"
        alt=""
      />
      <div className="space-y-7 text-[#1C2B62]">
        <h1 className="text-3xl font-bold">David Grant</h1>
        <h2 className="mt-1">3D Artist</h2>

        <div className="space-y-4">
          <p>4.7 Rating</p>
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
