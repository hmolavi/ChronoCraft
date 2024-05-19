export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="max-w-[320px] p-4 flex h-full bg-slate-50">
        <div className="w-full h-full">
          <p>When do you want to travel to?</p>
          <input placeholder="Insert Query" />
          <button>Browse</button>
        </div>
      </div>
      <div className="h-screen w-full"></div>
    </main>
  );
}
