import { Shield, Smartphone, Users } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

export function Default() {
  return (
    <div className="flex min-h-[60vh] w-full flex-wrap items-center justify-center gap-6 p-6">
      <GlowCard className="h-64 w-56">
        <div className="flex h-full flex-col justify-between rounded-xl bg-slate-900/70 p-5 text-white">
          <Smartphone className="h-8 w-8 text-blue-300" />
          <p className="font-semibold">Telecom Marketing</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple" className="h-64 w-56">
        <div className="flex h-full flex-col justify-between rounded-xl bg-slate-900/70 p-5 text-white">
          <Shield className="h-8 w-8 text-purple-300" />
          <p className="font-semibold">Home Security</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="green" className="h-64 w-56">
        <div className="flex h-full flex-col justify-between rounded-xl bg-slate-900/70 p-5 text-white">
          <Users className="h-8 w-8 text-emerald-300" />
          <p className="font-semibold">Lead Generation</p>
        </div>
      </GlowCard>
    </div>
  );
}
