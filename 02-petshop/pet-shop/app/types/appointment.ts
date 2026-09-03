import { Appointment as AppointmentPrisma } from '../generated/prisma/client';
import { AppointmentPeriodTime } from '@/lib/constants';

export type Appointment = {
  period: AppointmentPeriodTime;
} & AppointmentPrisma;

export type AppointmentPeriod = {
  title: string;
  type: AppointmentPeriodTime;
  timeRange: string;
  appointments: Appointment[];
};

export type { AppointmentPeriodTime };
