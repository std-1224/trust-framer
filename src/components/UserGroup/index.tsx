import Avatars from "./Avatars";

const UserGroup = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="py-2 pl-2 pr-3.5 justify-items-center bg-[#18181a] border border-solid border-[#28282c] rounded-full flex gap-4 w-max">
        <Avatars />
        <p className="text-base content-center">
          onboarding the next 1 million users
        </p>
      </div>
    </div>
  );
};

export default UserGroup;
