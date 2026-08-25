'use server';

import prisma from '@/lib/prisma';
import z from 'zod';

const appointmentSchema = z.object({
  tutorName: z.string(),
  petName: z.string(),
  phone: z.string(),
  description: z.string(),
  scheduledAt: z.date(),
});

type AppointmentData = z.infer<typeof appointmentSchema>;

export async function createAppointment(data: AppointmentData) {
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
  } catch (error) {
    console.error(error);
  }
}
