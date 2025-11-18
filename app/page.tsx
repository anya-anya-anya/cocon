"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

	<Section title="私たちについて">
        <p>
	cocon（ココン）とはフランス語で「繭」です。<br/>
	繭の中のような暖かい空間で、糸を紡ぐように人とのつながりを大切にしたいと思いからつけました。<br/>
	みんなで楽しく、元気に活動しています！
        </p>
      </Section>

      <Section title="活動内容">
        <ul className="list-disc pl-6">
          <li>見守り・声かけ</li>
          <li>買い物のお手伝い</li>
          <li>イベント運営サポート</li>
          <li>地域清掃活動</li>
        </ul>
      </Section>

      <Section title="開催予定・イベント情報">
        <ul>
          <li>・◯月◯日：イベント名</li>
          <li>・◯月◯日：交流会</li>
        </ul>
      </Section>

<Section title="ご依頼・お問い合わせ">
  <p className="mb-4">
    お気軽にご連絡・ご相談ください！
  </p>

  <div className="flex flex-col sm:flex-row gap-4">

    {/* メールボタン */}
    <a
      href="mailto:volunteer@example.com"
      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow transition"
    >
      📩 メールでお問い合わせ
    </a>

    {/* LINEボタン */}
    <a
      href="https://lin.ee/xxxxx"   // ← LINE公式アカウントURLをここに入れる！
      target="_blank"
      className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow transition"
    >
      💚 LINEでお問い合わせ
    </a>

  </div>
</Section>
      <Footer />
    </>
  );
}
