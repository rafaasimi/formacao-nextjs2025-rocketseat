'use server';

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
    const hour = scheduledAt.getHours();

    const isMorning = hour >= 9 && hour < 12;
    const isAfternoon = hour >= 13 && hour < 18;
    const isEvening = hour >= 19 && hour < 21;

    if (!(isMorning || isAfternoon || isEvening)) {
      throw new Error(
        'Agendamentos só podem ser feitos entre 9h e 12h, 13h e 18h ou 19h e 21h.'
      );
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
    const hour = scheduledAt.getHours();

    const isMorning = hour >= 9 && hour < 12;
    const isAfternoon = hour >= 13 && hour < 18;
    const isEvening = hour >= 19 && hour < 21;

    if (!(isMorning || isAfternoon || isEvening)) {
      throw new Error(
        'Agendamentos só podem ser feitos entre 9h e 12h, 13h e 18h ou 19h e 21h.'
      );
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
