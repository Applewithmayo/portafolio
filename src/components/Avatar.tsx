'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const BASE = '/portafolio/avatars';

const MOODS = [
  `${BASE}/default.png`,
  `${BASE}/winking.png`,
  `${BASE}/thinking.png`,
  `${BASE}/laughing.png`,
  `${BASE}/laughing-thumbs.png`,
  `${BASE}/shocked.png`,
  `${BASE}/shocked-2.png`,
  `${BASE}/nervous.png`,
  `${BASE}/suspicious.png`,
  `${BASE}/angry.png`,
  `${BASE}/angry-stressed.png`,
  `${BASE}/rage.png`,
  `${BASE}/screaming.png`,
  `${BASE}/sad.png`,
  `${BASE}/crying.png`,
  `${BASE}/embarrassed.png`,
  `${BASE}/dizzy.png`,
  `${BASE}/beat-up.png`,
  `${BASE}/sleeping.png`,
  `${BASE}/drooling.png`,
  `${BASE}/love.png`,
  `${BASE}/hot.png`,
];

const CYCLE_MS = 4500;
const FADE_MS  = 750;

export default function Avatar() {
  const wrapRef  = useRef<HTMLDivElement>(null!);
  const imgBRef  = useRef<HTMLImageElement>(null!);
  const idxRef   = useRef(0);
  const [srcA, setSrcA] = useState(MOODS[0]);

  // Preload all images on mount so transitions are instant
  useEffect(() => {
    MOODS.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  const advance = useCallback(() => {
    const nextIdx = (idxRef.current + 1) % MOODS.length;
    idxRef.current = nextIdx;
    const next = MOODS[nextIdx];
    const b = imgBRef.current;

    // 1. Reset B instantly (no transition) and load new src
    b.style.transition = 'none';
    b.style.opacity = '0';
    b.src = next;

    // 2. Two rAFs so browser paints the new src before we start the fade
    requestAnimationFrame(() => requestAnimationFrame(() => {
      b.style.transition = `opacity ${FADE_MS}ms ease-in-out`;
      b.style.opacity = '1';
    }));

    // 3. After B is fully in: A absorbs the new src (flushSync = synchronous,
    //    so A is painted before B resets — zero visible gap)
    setTimeout(() => {
      flushSync(() => setSrcA(next));
      b.style.transition = 'none';
      b.style.opacity = '0';
    }, FADE_MS + 60);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, CYCLE_MS);
    return () => clearInterval(id);
  }, [advance]);

  // 3-D head tilt
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      wrapRef.current.style.transform =
        `perspective(600px) rotateY(${nx * 18}deg) rotateX(${-ny * 11}deg)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const imgBase: React.CSSProperties = {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'contain',
  };

  return (
    <div
      ref={wrapRef}
      className="select-none"
      style={{
        position: 'relative',
        width: 280,
        height: 303,
        transition: 'transform 140ms ease-out',
        willChange: 'transform',
      }}
    >
      {/* Layer A — stable base, React-controlled */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={srcA} alt="Eduardo Maldonado" draggable={false} style={imgBase} />

      {/* Layer B — incoming mood, DOM-controlled for precise timing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgBRef}
        src={srcA}
        alt=""
        aria-hidden
        draggable={false}
        style={{ ...imgBase, opacity: 0 }}
      />
    </div>
  );
}
