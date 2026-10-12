export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 animate-pulse" aria-busy="true">
      <div className="h-6 w-40 rounded-full bg-[#EBF1E9]" />
      <div className="mt-6 h-12 w-3/4 max-w-2xl rounded-2xl bg-[#EBF1E9]" />
      <div className="mt-4 h-5 w-2/3 max-w-xl rounded-full bg-[#EBF1E9]/70" />
      <div className="mt-10 h-64 rounded-3xl bg-white border border-[#CBD5C8]/60" />
    </div>
  );
}
