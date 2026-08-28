import { PeriodSection } from '@/components/period-section';
import {
  Appointment,
  AppointmentPeriod,
  AppointmentPeriodTime,
} from './types/appointment';
import prisma from '@/lib/prisma';
import { AppointmentForm } from '@/components/appointment-form';
import { Button } from '@/components/ui/button';
import { endOfDay, parseISO, startOfDay } from 'date-fns';
import { DatePicker } from '@/components/date-picker';
import Image from 'next/image';

const businessHours: Record<
  AppointmentPeriodTime,
  { start: number; end: number }
> = {
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
  const grouped: Record<AppointmentPeriodTime, Appointment[]> = {
    morning: [],
    afternoon: [],
    night: [],
  };

  for (const appointment of appointments) {
    grouped[appointment.period].push(appointment);
  }

  return grouped;
}

function getPeriods(
  grouped: Record<AppointmentPeriodTime, Appointment[]>
): AppointmentPeriod[] {
  return [
    {
      title: 'Manhã',
      type: 'morning',
      timeRange: `${businessHours.morning.start}h-${businessHours.morning.end}h`,
      appointments: grouped.morning,
    },
    {
      title: 'Tarde',
      type: 'afternoon',
      timeRange: `${businessHours.afternoon.start}h-${businessHours.afternoon.end}h`,
      appointments: grouped.afternoon,
    },
    {
      title: 'Noite',
      type: 'night',
      timeRange: `${businessHours.night.start}h-${businessHours.night.end}h`,
      appointments: grouped.night,
    },
  ];
}

type HomeProps = {
  searchParams: Promise<{ date?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { date } = await searchParams;
  const selectedDate = date ? parseISO(date) : new Date();

  const appointments = await prisma.appointment.findMany({
    where: {
      scheduledAt: {
        gte: startOfDay(selectedDate),
        lte: endOfDay(selectedDate),
      },
    },
    orderBy: {
      scheduledAt: 'asc',
    },
  });

  const normalizedAppointments = normalizeAppointments(appointments);
  const groupedAppointments = groupAppointmentsByPeriod(normalizedAppointments);
  const periods = getPeriods(groupedAppointments);

  return (
    <div className="bg-background-primary px-5 py-3 md:px-20 md:py-15.5 mb-32 md:mb-0">
      <div className="fixed flex items-center gap-1 top-0 left-0 px-5 py-3 uppercase rounded-br-xl bg-[#2e2c30] text-[#9282fa] font-bold">
        <Image src="/logo.svg" width={20} height={20} alt="Mundo Pet" />
        Mundo Pet
      </div>

      <div className="flex flex-col gap-3 md:items-center md:flex-row mb-8 mt-14 md:mt-5">
        <div className="flex-1">
          <h1 className="text-title-size text-content-primary">Sua agenda</h1>
          <p className="text-paragraph-medium-size text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>

        <div>
          <DatePicker />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {periods.map((period) => (
          <PeriodSection key={period.type} period={period} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-background-tertiary py-4.5 px-6 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentForm
          children={
            <Button variant="brand" className="uppercase">
              Novo agendamento
            </Button>
          }
        />
      </div>
    </div>
  );
}
