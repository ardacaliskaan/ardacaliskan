"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ComingSoon() {
  /* ---------- AYARLAR ---------- */
  const MAX_PROGRESS_BEFORE_GO = 92; // yayına kadar tavan
  const launchAtRef = useRef(new Date("2025-10-03T00:00:00+03:00")); // 01.10.2025
  const startAtRef  = useRef(new Date()); // ŞİMDİDEN başlasın (ilk render zamanı sabitlenir)

  const launchAt = launchAtRef.current;
  const startAt  = startAtRef.current;

  /* ---------- PROGRESS (ZAMAN TABANLI) ---------- */
  const [progress, setProgress] = useState(5);
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const total   = Math.max(1, launchAt.getTime() - startAt.getTime());
      const elapsed = Math.min(total, Math.max(0, now - startAt.getTime()));


      const pct = Math.floor((elapsed / total) * 100);
      // başlangıçta 5%'in altına düşmesin; yayına kadar 92%'yi geçmesin
      setProgress(Math.min(MAX_PROGRESS_BEFORE_GO, Math.max(5, pct)));
    };

    setProgress(70); // hızlı başlangıç için
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [launchAt, startAt]);

  /* ---------- GERİ SAYIM ---------- */
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = launchAt.getTime() - Date.now();
      setLeft({
        d: Math.max(0, Math.floor(diff / 86400000)),
        h: Math.max(0, Math.floor((diff / 3600000) % 24)),
        m: Math.max(0, Math.floor((diff / 60000) % 60)),
        s: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [launchAt]);

  /* ---------- YETENEKLER ---------- */
  const skills = useMemo(
    () => [
      { name: "C# / ASP.NET", val: 96 },
      { name: "JavaScript (ESNext)", val: 92 },
      { name: "React / Next.js", val: 94 },
      { name: "HTML · CSS(SASS) · Tailwind", val: 95 },
      { name: "SQL · Git · DevOps", val: 88 },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-pro flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl grid md:grid-cols-5 gap-6">
        {/* Sol: Hero + Progress */}
        <section className="md:col-span-3">
          <div className="glass rounded-3xl p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Arda Çalışkan · Web Geliştirme & Yazılım
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="heading-gradient">Yazılımda Gelecek</span> Burada Şekilleniyor.
            </h1>

            <p className="mt-3 text-lg text-[var(--muted)]">
              Yeni portföy sitem son dokunuşlarda. Projelerim, deneyimlerim ve teknik notlarım yakında burada olacak.
            </p>

            {/* Ana Progress */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--muted)]">Hazırlık Durumu</span>
                <span className="text-sm font-semibold text-indigo-300">%{progress}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-3 rounded-full progress-animated transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Kilometre Taşları */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <Caps ok={progress >= 25} label="Tasarım" />
                <Caps ok={progress >= 55} label="İçerik" />
                <Caps ok={progress >= 80} label="Test" />
                <Caps ok={progress >= 100 || progress >= MAX_PROGRESS_BEFORE_GO} label="Yayın" />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:alkanlardal@icloud.com"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-lg bg-indigo-600 hover:bg-indigo-700"
              >
                📧 İletişim
              </a>
              <a
                href="https://www.linkedin.com/in/ardacaliskaan/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-lg bg-blue-600 hover:bg-blue-700"
              >
                🔗 LinkedIn
              </a>
            </div>

            {/* Sayaç */}
            <div className="mt-6 grid grid-cols-4 gap-3 text-center">
              <TimerBox label="Gün" val={left.d} />
              <TimerBox label="Saat" val={left.h} />
              <TimerBox label="Dakika" val={left.m} />
              <TimerBox label="Saniye" val={left.s} />
            </div>
          </div>
        </section>

        {/* Sağ: Yetenekler + İstatistik */}
        <aside className="md:col-span-2">
          <div className="glass rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold">Odak & Yetenekler</h3>

            <div className="space-y-4">
              {skills.map((s) => (
                <Skill key={s.name} name={s.name} val={s.val} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <Stat k="Proje" v="40+" />
              <Stat k="Deneyim" v="7+ Yıl" />
              <Stat k="Stack" v="C#, JS, Next" />
            </div>

            <p className="text-sm text-[var(--muted)]">
              Karabük’te başlayan yolculuk; <b>C# / ASP.NET</b>, <b>JavaScript</b> ve <b>Next.js</b> ile
              ölçeklenebilir uygulamalar geliştirmeye odaklanıyor.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

/* --------- BİLEŞENLER --------- */

function Caps({ ok, label }) {
  return (
    <span
      className={`px-3 py-1 rounded-full border text-xs ${
        ok
          ? "border-emerald-400/50 text-emerald-300 bg-emerald-400/10"
          : "border-white/20 text-[var(--muted)]"
      }`}
    >
      {label}
    </span>
  );
}

function TimerBox({ label, val }) {
  const v = String(val ?? 0).padStart(2, "0");
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
      <div className="text-3xl font-extrabold">{v}</div>
      <div className="text-xs text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
}

function Skill({ name, val }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(val, p + 4);
      setPct(p);
      if (p >= val) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [val]);

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1">
        <span>{name}</span>
        <span className="font-semibold text-indigo-300">%{pct}</span>
      </div>
      <div className="h-2 rounded-full bg-white/15 overflow-hidden">
        <div
          className="h-2 rounded-full progress-animated transition-[width] duration-200"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
      <div className="text-xs text-[var(--muted)]">{k}</div>
      <div className="text-lg font-bold">{v}</div>
    </div>
  );
}
