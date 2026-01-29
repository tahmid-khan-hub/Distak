
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 py-32 px-16">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Welcome to Distak
        </h1>
        <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
          Explore
        </button>
      </main>
    </div>
  );
}
