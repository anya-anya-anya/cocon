"use client";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-700 mb-4">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </section>
  );
}
