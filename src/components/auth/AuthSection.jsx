const AuthSection = ({ children }) => {
  return (
    <section className="h-screen md:flex md:justify-center md:items-center md:bg-gray-light">
      <main className={`h-full md:h-fit md:w-3/5 lg:w-2/6 bg-white md:rounded-3xl lg:rounded-2xl flex flex-col px-4 mt-8 md:mt-0 md:p-8 lg:p-6 gap-y-5 md:gap-y-8 lg:gap-y-7`}>
        {children}  
      </main>
    </section>
  );
};

export default AuthSection;