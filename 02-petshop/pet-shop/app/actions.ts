'use server';

import {
  APPOINTMENT_ERROR_MESSAGE,
  isValidAppointmentHour,
} from '@/lib/constants';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import z from 'zod';

const appointmentSchema = z.object({
  tutorName: z.string(),
  petName: z.string(),
  phone: z.string(),
  description: z.string(),
  scheduledAt: z.date(),
});

type AppointmentData = z.infer<typeof appointmentSchema>;

export async function createAppointment(
  data: AppointmentData
): Promise<{ error?: string }> {
  try {
    const parsedData = appointmentSchema.parse(data);

    const { scheduledAt } = parsedData;

    if (!isValidAppointmentHour(scheduledAt)) {
      throw new Error(APPOINTMENT_ERROR_MESSAGE);
    }

    const existingAppointments = await prisma.appointment.findFirst({
      where: {
        scheduledAt,
      },
    });

    if (existingAppointments) {
      throw new Error('Já existe um agendamento para este horário.');
    }

    await prisma.appointment.create({
      data: parsedData,
    });

    revalidatePath('/');

    return {};
  } catch (error) {
    console.error(error);
    return { error: (error as Error).message };
  }
}

export async function updateAppointment(id: number, data: AppointmentData) {
  try {
    const parsedData = appointmentSchema.parse(data);

    const { scheduledAt } = parsedData;

    if (!isValidAppointmentHour(scheduledAt)) {
      throw new Error(APPOINTMENT_ERROR_MESSAGE);
    }

    const existingAppointments = await prisma.appointment.findFirst({
      where: {
        scheduledAt,
        id: {
          not: id,
        },
      },
    });

    if (existingAppointments) {
      throw new Error('Já existe um agendamento para este horário.');
    }

    await prisma.appointment.update({
      data: parsedData,
      where: {
        id,
      },
    });

    revalidatePath('/');

    return {};
  } catch (error) {
    console.error(error);
    return { error: (error as Error).message };
  }
}

export async function deleteAppointment(id: number) {
  try {
    const existingAppointment = await prisma.appointment.findUnique({
      where: {
        id,
      },
    });

    if (!existingAppointment) {
      throw new Error('Agendamento não encontrado.');
    }

    await prisma.appointment.delete({
      where: {
        id,
      },
    });

    revalidatePath('/');

    return {};
  } catch (error) {
    console.error(error);
    return {
      error: (error as Error).message || 'Erro ao deletar agendamento.',
    };
  }
}
