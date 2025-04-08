const AuthSection = ({ children }) => {
  return (
    <section className="h-screen md:flex md:justify-center md:items-center md:bg-pink-light">
      <main className="h-full md:h-fit md:w-3/5 lg:w-2/6 bg-white md:rounded-2xl lg:p-6">
        {children}  
      </main>
    </section>
  );
};

export default AuthSection;