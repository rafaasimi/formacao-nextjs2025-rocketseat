import { CloudSunIcon, HazeIcon, MoonStarIcon } from 'lucide-react';

type PeriodSectionProps = {
  period: {
    title: string;
    type: 'morning' | 'afternoon' | 'night';
  };
};

const periodIcons = {
  morning: <HazeIcon size={20} className="text-accent-blue" />,
  afternoon: <CloudSunIcon size={20} className="text-accent-orange" />,
  night: <MoonStarIcon size={20} className="text-accent-yellow" />,
};

export function PeriodSection({ period }: PeriodSectionProps) {
  return (
    <section className="bg-background-tertiary rounded-[10px]">
      <header className="flex items-center justify-between px-5 py-3.5 border-b border-[#2E2C30]">
        <div className="flex items-center gap-3">
          {periodIcons[period.type]}
          <p className="text-label-large-size text-content-primary">
            {period.title}
          </p>
        </div>
        <div>
          <span className="text-label-large-size text-content-secondary">
            09h-12h
          </span>
        </div>
      </header>
      <main className="p-5">teste</main>
    </section>
  );
}
