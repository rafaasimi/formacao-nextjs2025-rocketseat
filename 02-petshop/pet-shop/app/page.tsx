import { PeriodSection } from '@/components/period-section';
import {
  Appointment,
  AppointmentPeriod,
  AppointmentPeriodTime,
} from './types/appointment';
import prisma from '@/lib/prisma';
import { AppointmentForm } from '@/components/appointment-form';

const appointments = [
  {
    id: 1,
    petName: 'Thor',
    tutorName: 'Carlos',
    description: 'Vacinação',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: 2,
    petName: 'Luna',
    tutorName: 'Fernanda',
    description: 'Tosa higiênica',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T11:00:00'),
  },
  {
    id: 3,
    petName: 'Mel',
    tutorName: 'Patrícia',
    description: 'Retorno clínico',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T13:00:00'),
  },
  {
    id: 4,
    petName: 'Bob',
    tutorName: 'Ricardo',
    description: 'Banho e secagem',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T14:00:00'),
  },
  {
    id: 5,
    petName: 'Pipoca',
    tutorName: 'Aline',
    description: 'Corte de unhas',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T15:00:00'),
  },
  {
    id: 6,
    petName: 'Simba',
    tutorName: 'Gustavo',
    description: 'Avaliação odontológica',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T19:00:00'),
  },
];

const businessHours = {
  morning: { start: 9, end: 12 },
  afternoon: { start: 13, end: 18 },
  night: { start: 19, end: 21 },
};

function getAppointmentPeriod(hour: number): AppointmentPeriodTime {
  if (
    hour >= businessHours.morning.start &&
    hour <= businessHours.morning.end
  ) {
    return 'morning';
  }
  if (
    hour >= businessHours.afternoon.start &&
    hour <= businessHours.afternoon.end
  ) {
    return 'afternoon';
  }
  if (hour >= businessHours.night.start && hour <= businessHours.night.end) {
    return 'night';
  }
  throw new Error(`Horário ${hour}h fora do expediente`);
}

function normalizeAppointments(appointments: Omit<Appointment, 'period'>[]) {
  return appointments.map((appointment) => ({
    ...appointment,
    period: getAppointmentPeriod(appointment.scheduledAt.getHours()),
  }));
}

function groupAppointmentsByPeriod(appointments: Appointment[]) {
  return appointments.reduce<{
    morning: Appointment[];
    afternoon: Appointment[];
    night: Appointment[];
  }>(
    (acc, appointment) => {
      acc[appointment.period].push(appointment);
      return acc;
    },
    { morning: [], afternoon: [], night: [] }
  );
}

const normalizedAppointments = normalizeAppointments(appointments);
const { morning, afternoon, night } = groupAppointmentsByPeriod(
  normalizedAppointments
);

const periods: AppointmentPeriod[] | null = [
  {
    title: 'Manhã',
    type: 'morning',
    timeRange: `${businessHours.morning.start}h-${businessHours.morning.end}h`,
    appointments: morning,
  },
  {
    title: 'Tarde',
    type: 'afternoon',
    timeRange: `${businessHours.afternoon.start}h-${businessHours.afternoon.end}h`,
    appointments: afternoon,
  },
  {
    title: 'Noite',
    type: 'night',
    timeRange: `${businessHours.night.start}h-${businessHours.night.end}h`,
    appointments: night,
  },
];

export default async function Home() {
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
        {periods &&
          periods.map((period) => (
            <PeriodSection key={period.type} period={period} />
          ))}
      </div>

      <div className="absolute bottom-8 right-8">
        <AppointmentForm />
      </div>
    </div>
  );
}
