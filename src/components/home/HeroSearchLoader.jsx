'use client';

import dynamic from 'next/dynamic';

const HeroSearch = dynamic(() => import('./HeroSearch'), {
  ssr: false,
  loading: () => (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="w-full h-14 rounded-full bg-white/10 border-2 border-white/50 backdrop-blur-md" />
    </div>
  ),
});

export default function HeroSearchLoader({ destinations, blogs }) {
  return <HeroSearch destinations={destinations} blogs={blogs} />;
}
