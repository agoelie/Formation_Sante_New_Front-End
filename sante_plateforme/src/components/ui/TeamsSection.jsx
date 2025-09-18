export default function ProfileCards() {
  return (
    <div className="w-full h-20px bg-gray-100 dark:bg-gray-800">
      <div className="w-full h-full py-20 flex flex-wrap justify-center items-center gap-6">
        
        {/* Card 1 */}
        <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 border border-gray-300 rounded-lg bg-white dark:bg-gray-900 shadow-lg">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]"
              src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
              alt="Profile"
            />
          </div>

          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="uppercase text-lg font-semibold dark:text-white">
              Software Developer
            </h1>
            <h2 className="text-xl font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              samuel abera
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate
              about web development, quick learner, and committed to exceptional websites. Let's collaborate!
            </p>
            <button className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2">
              Follow
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 border border-gray-300 rounded-lg bg-white dark:bg-gray-900 shadow-lg">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxwZW9wbGV8ZW58MHwwfHx8MTcxODQ3NDU1Mnww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Profile"
            />
          </div>

          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="uppercase text-lg font-semibold dark:text-white">
              Software Developer
            </h1>
            <h2 className="text-xl font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Abc Esx
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate
              about web development, quick learner, and committed to exceptional websites. Let's collaborate!
            </p>
            <button className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2">
              Follow
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 border border-gray-300 rounded-lg bg-white dark:bg-gray-900 shadow-lg">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 relative -top-[4rem]"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8MHx8fDE3MTg0NzQ1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Profile"
            />
          </div>

          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="uppercase text-lg font-semibold dark:text-white">
              Software Developer
            </h1>
            <h2 className="text-xl font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Yzx Lms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate
              about web development, quick learner, and committed to exceptional websites. Let's collaborate!
            </p>
            <button className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2">
              Follow
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
