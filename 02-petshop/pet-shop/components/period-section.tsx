import { AppointmentPeriod } from '@/app/types/appointment';
import { CloudSunIcon, HazeIcon, MoonStarIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

type PeriodSectionProps = {
  period: AppointmentPeriod;
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
            {period.timeRange}
          </span>
        </div>
      </header>
      <main className="p-5 flex flex-col gap-4 md:gap-3 ">
        {period.appointments.length > 0 ? (
          <div>
            {period.appointments.map((appointment, index) => (
              <div
                key={appointment.id}
                className={twMerge(
                  'p-3 md:px-3 md:py-4 text-paragraph-small-size grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4',
                  index !== 0 && 'border-t border-border-divisor'
                )}
              >
                <div className="flex gap-4">
                  <span className="text-content-primary min-w-10">
                    {appointment.scheduledAt.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <span className="text-content-secondary md:flex-1">
                    <span className="text-content-primary">
                      {appointment.petName}
                    </span>{' '}
                    / {appointment.tutorName}
                  </span>
                  <span className="text-content-secondary md:flex-1">
                    {appointment.description}
                  </span>
                </div>
                <div className="text-end md:text-start">
                  <span className="text-content-tertiary">
                    Remover agendamento
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="p-3 text-paragraph-small-size text-content-secondary">
            Não há agendamentos para este período
          </p>
        )}
      </main>
    </section>
  );
}
