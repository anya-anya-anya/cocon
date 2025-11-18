"use client";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-orange-500 text-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl">cocon</h1>

        <nav className="flex gap-4 text-sm font-medium">
          <a href="/" className="hover:underline">ホーム</a>
          <a href="/about" className="hover:underline">サークル紹介（準備中）</a>
          <a href="/gallery" className="hover:underline">ギャラリー</a>
        </nav>
      </div>
    </header>
  );
}
