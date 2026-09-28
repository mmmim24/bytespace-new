import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50">
      <main className="flex flex-1 gap-10 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white sm:items-start">
        <h1 className="text-2xl font-medium">ByteSpace Heading Poppins</h1>
        <div className="flex flex-col gap-4 text-2xl font-medium sm:flex-row">
          ByteSpace Body Satoshi
        </div>
      </main>
    </div>
  );
}
