export default function StatusSection() {
  return (
    <section className={"flex-1 overflow-hidden grid md:grid-cols-2 lg:grid-cols-[30%_70%] w-full"}>
      <div className={"bg-white"}>Hello Section</div>
      <div className={"hidden md:block"}>Status Section</div>
    </section>
  )
}