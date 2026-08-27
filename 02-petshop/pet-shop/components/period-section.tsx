'use client';

import { AppointmentPeriod } from '@/app/types/appointment';
import {
  CloudSunIcon,
  HazeIcon,
  Loader2,
  MoonStarIcon,
  Pen,
  Trash2,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { AppointmentForm } from './appointment-form';
import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { useState } from 'react';
import { deleteAppointment } from '@/app/actions';
import { toast } from './ui/toast';

type PeriodSectionProps = {
  period: AppointmentPeriod;
};

const periodIcons = {
  morning: <HazeIcon size={20} className="text-accent-blue" />,
  afternoon: <CloudSunIcon size={20} className="text-accent-orange" />,
  night: <MoonStarIcon size={20} className="text-accent-yellow" />,
};

export function PeriodSection({ period }: PeriodSectionProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete(periodId: number) {
    setIsDeleting(true);

    const result = await deleteAppointment(periodId);

    if (result?.error) {
      console.error(result.error);
      toast.add({
        description: result.error,
        type: 'error',
      });

      setIsDeleting(false);
      return;
    }

    toast.add({
      description: 'Agendamento removido com sucesso.',
      type: 'success',
    });

    setIsDeleting(false);
  }

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
                <div className="text-end md:text-start space-x-2">
                  <AppointmentForm
                    appointment={appointment}
                    children={
                      <Button variant="edit" size={'icon'}>
                        <Pen size={16} />
                      </Button>
                    }
                  />

                  <AlertDialog>
                    <AlertDialogTrigger
                      render={
                        <Button variant="remove" size={'icon'}>
                          <Trash2 size={16} />
                        </Button>
                      }
                    />
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remover agendamento</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja remover este agendamento? Esa
                          ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel variant="outline">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="md:w-28"
                          variant="destructive"
                          onClick={() => handleDelete(appointment.id)}
                          disabled={isDeleting}
                        >
                          {isDeleting ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            'Remover'
                          )}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
