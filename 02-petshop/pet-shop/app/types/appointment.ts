import { Appointment as AppointmentPrisma } from '../generated/prisma/client';

export type Appointment = {
  period: AppointmentPeriodTime;
} & AppointmentPrisma;

export type AppointmentPeriod = {
  title: string;
  type: AppointmentPeriodTime;
  timeRange: string;
  appointment: Appointment[];
};

export type AppointmentPeriodTime = 'morning' | 'afternoon' | 'night';
