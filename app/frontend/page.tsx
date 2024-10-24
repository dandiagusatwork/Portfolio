import RecentProjects from "@/components/frontend";

const Frontend = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <RecentProjects />
      </div>
    </main>
  );
};

export default Frontend;
