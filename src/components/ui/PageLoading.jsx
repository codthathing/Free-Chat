export default function PageLoading() {
  return (
    <div className={"h-dvh flex flex-col gap-y-1 bg-background-gray md:p-1"}>
      <header className="flex flex-col gap-y-4 px-3 py-10 w-full md:p-10 loading-background-animation"></header>
      <section className={"flex-1 overflow-hidden flex flex-col gap-y-1 md:flex-row md:gap-x-1"}>
        <div className={"md:order-2 flex-1 flex flex-col md:flex-row md:gap-x-1"}>
          <div className={"flex-1 md:order-2 loading-background-animation"} />
          <div className={"hidden md:block md:order-1 md:w-3/5 lg:w-[30%] loading-background-animation"} />
        </div>
        <footer className={"md:order-1 p-6 loading-background-animation"} />
      </section>
    </div>
  );
}