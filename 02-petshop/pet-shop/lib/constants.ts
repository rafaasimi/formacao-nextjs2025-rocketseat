export type AppointmentPeriodTime = 'morning' | 'afternoon' | 'night';

export const APPOINTMENT_PERIODS: {
  type: AppointmentPeriodTime;
  title: string;
  start: number;
  end: number;
}[] = [
  { type: 'morning', title: 'Manhã', start: 9, end: 12 },
  { type: 'afternoon', title: 'Tarde', start: 13, end: 18 },
  { type: 'night', title: 'Noite', start: 19, end: 21 },
];

export const APPOINTMENT_ERROR_MESSAGE =
  'Agendamentos só podem ser feitos entre 9h e 12h, 13h e 18h ou 19h e 21h.';

export function isValidAppointmentHour(date: Date): boolean {
  const hour = date.getHours();
  return APPOINTMENT_PERIODS.some(
    ({ start, end }) => hour >= start && hour < end
  );
}

export function getAppointmentPeriod(hour: number): AppointmentPeriodTime {
  for (const period of APPOINTMENT_PERIODS) {
    if (hour >= period.start && hour < period.end) {
      return period.type;
    }
  }
  throw new Error(`Horário ${hour}h fora do expediente`);
}
