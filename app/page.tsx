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
	cocon（ココン）とはフランス語で「繭」です。
	繭の中のような暖かい空間で、糸を紡ぐように
	人とのつながりを大切にしたいと
	思いからつけました。

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

<Section title="参加・お問い合わせ">
        <p>
          興味がある方はお気軽にご連絡ください！
          <br />
          メール：volunteer@example.com
        </p>
      </Section>
      <Footer />
    </>
  );
}
