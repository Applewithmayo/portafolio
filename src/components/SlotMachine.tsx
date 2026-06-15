'use client';

import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const BASE = '/portafolio/avatars';

const SYMBOLS = [
  `${BASE}/default.png`,
  `${BASE}/winking.png`,
  `${BASE}/thinking.png`,
  `${BASE}/laughing.png`,
  `${BASE}/laughing-thumbs.png`,
  `${BASE}/shocked.png`,
  `${BASE}/shocked-2.png`,
  `${BASE}/nervous.png`,
  `${BASE}/angry.png`,
  `${BASE}/rage.png`,
  `${BASE}/sad.png`,
  `${BASE}/crying.png`,
  `${BASE}/love.png`,
  `${BASE}/sleeping.png`,
  `${BASE}/dizzy.png`,
];
const N = SYMBOLS.length;

type Result = 'jackpot' | 'two' | 'none';

const REACTION_SRCS: Record<Result, string> = {
  jackpot: `${BASE}/laughing-thumbs.png`,
  two: `${BASE}/winking.png`,
  none: `${BASE}/crying.png`,
};

function pickTargets(): [number, number, number] {
  const rand = () => Math.floor(Math.random() * N);
  const r = Math.random();
  if (r < 0.05) {
    const i = rand();
    return [i, i, i];
  }
  if (r < 0.28) {
    const match = rand();
    const other = (match + 1 + Math.floor(Math.random() * (N - 1))) % N;
    const pos = Math.floor(Math.random() * 3) as 0 | 1 | 2;
    if (pos === 0) return [match, match, other];
    if (pos === 1) return [match, other, match];
    return [other, match, match];
  }
  const a = rand();
  let b = rand(); while (b === a) b = rand();
  let c = rand(); while (c === a || c === b) c = rand();
  return [a, b, c];
}

function spinReel(
  setter: React.Dispatch<React.SetStateAction<number>>,
  target: number,
  startDelay: number,
  totalTicks: number,
  onDone: () => void,
) {
  setTimeout(() => {
    let ticks = 0;
    const tick = () => {
      ticks++;
      if (ticks >= totalTicks) {
        setter(target);
        onDone();
        return;
      }
      setter(prev => (prev + 1) % N);
      const progress = ticks / totalTicks;
      const delay = 55 + progress * progress * 165;
      setTimeout(tick, delay);
    };
    tick();
  }, startDelay);
}

export default function SlotMachine() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { lang } = useLanguage();

  const [i0, setI0] = useState(0);
  const [i1, setI1] = useState(5);
  const [i2, setI2] = useState(10);
  const [s0, setS0] = useState(true);
  const [s1, setS1] = useState(true);
  const [s2, setS2] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const doneCount = useRef(0);

  const handleSpin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    setS0(false);
    setS1(false);
    setS2(false);
    doneCount.current = 0;

    const [t0, t1, t2] = pickTargets();

    const onReelDone = () => {
      doneCount.current += 1;
      if (doneCount.current === 3) {
        setSpinning(false);
        if (t0 === t1 && t1 === t2)                          setResult('jackpot');
        else if (t0 === t1 || t1 === t2 || t0 === t2)       setResult('two');
        else                                                  setResult('none');
      }
    };

    spinReel(setI0, t0, 0,    20, () => { setS0(true); onReelDone(); });
    spinReel(setI1, t1, 650,  25, () => { setS1(true); onReelDone(); });
    spinReel(setI2, t2, 1300, 30, () => { setS2(true); onReelDone(); });
  }, [spinning]);

  const reels = [
    { idx: i0, stopped: s0 },
    { idx: i1, stopped: s1 },
    { idx: i2, stopped: s2 },
  ];

  const tr = t[lang].slot;

  return (
    <motion.section
      ref={ref}
      className="py-24 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-accent mb-3 text-sm tracking-widest uppercase">
        {tr.label}
      </p>
      <h3 className="text-3xl md:text-4xl font-bold text-light-1 mb-3">
        {tr.title}
      </h3>
      <p className="text-light-2 mb-10 max-w-sm leading-relaxed">
        {tr.subtitle}
      </p>

      <div
        className="bg-dark-2 border border-light-2/10 rounded-2xl p-8 flex flex-col items-center gap-7 w-full max-w-sm"
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
      >
        <div className="flex gap-4">
          {reels.map(({ idx, stopped }, ri) => (
            <div
              key={ri}
              className="w-24 h-24 rounded-xl border-2 overflow-hidden bg-dark-1 flex items-center justify-center"
              style={{
                borderColor: stopped ? 'rgba(140,112,255,0.25)' : 'rgba(140,112,255,0.7)',
                boxShadow: stopped ? 'none' : '0 0 14px rgba(140,112,255,0.35)',
                transition: 'box-shadow 0.3s, border-color 0.3s',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SYMBOLS[idx]}
                alt="reel"
                className="w-20 h-20 object-contain"
                style={{
                  filter: stopped ? 'blur(0px)' : 'blur(2.5px)',
                  transition: stopped ? 'filter 0.25s ease' : 'none',
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSpin}
          disabled={spinning}
          className="w-full py-3 rounded-xl font-bold text-white text-lg transition-all duration-200 active:scale-95"
          style={{
            background: spinning
              ? '#302d4e'
              : 'linear-gradient(135deg, #8c70ff 0%, #00f5ff 100%)',
            cursor: spinning ? 'not-allowed' : 'pointer',
            boxShadow: spinning ? 'none' : '0 4px 20px rgba(140,112,255,0.45)',
          }}
        >
          {spinning ? tr.spinning : tr.spin}
        </button>

        {result && (
          <motion.div
            key={`${result}-${lang}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={REACTION_SRCS[result]}
              alt="reaction"
              className="w-14 h-14 object-contain flex-shrink-0"
            />
            <p className="text-light-1 text-sm leading-snug">
              {tr[result]}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
