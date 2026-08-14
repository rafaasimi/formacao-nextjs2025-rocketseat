import { PeriodSection } from '@/components/period-section';

const appointments = [
  {
    id: '1',
    petName: 'Rex',
    tutorName: 'João',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: '2',
    petName: 'Mimi',
    tutorName: 'Maria',
    description: 'Banho',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T11:00:00'),
  },
  {
    id: '3',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T14:00:00'),
  },
  {
    id: '4',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T19:00:00'),
  },
];

export default function Home() {
  return (
    <div className="bg-background-primary px-5 py-3 md:px-20 md:py-15.5">
      <div className="flex flex-col gap-3 items-center md:flex-row mb-8">
        <div className="flex-1">
          <h1 className="text-title-size text-content-primary">Sua agenda</h1>
          <p className="text-paragraph-medium-size text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>

        <div>DATE PICKER</div>
      </div>

      <div className="flex flex-col gap-3">
        <PeriodSection period={{ title: 'Manhã', type: 'morning' }} />
        <PeriodSection period={{ title: 'Tarde', type: 'afternoon' }} />
        <PeriodSection period={{ title: 'Noite', type: 'night' }} />
      </div>
    </div>
  );
}
