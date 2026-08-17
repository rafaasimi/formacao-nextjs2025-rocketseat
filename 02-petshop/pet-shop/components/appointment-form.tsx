'use client';

import z from 'zod';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório'),
  petName: z.string().min(3, 'O nome do pet é obrigatório'),
  phone: z.string().min(11, 'O telefone do tutor é obrigatório'),
  description: z.string().min(3, 'A descrição do atendimento é obrigatória'),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

function onSubmit(data: AppointmentFormData) {
  console.log(data);
}

export function AppointmentForm() {
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      tutorName: '',
      petName: '',
      phone: '',
      description: '',
    },
  });

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="brand" className="uppercase">
            Novo agendamento
          </Button>
        }
      />
      <DialogContent
        variant="appointment"
        overlayVariant="blurred"
        showCloseButton
      >
        <DialogHeader>
          <DialogTitle className="text-title-size">
            Agende um atendimento
          </DialogTitle>
          <DialogDescription className="text-paragraph-medium-size text-content-secondary">
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input type="text" {...form.register('tutorName')} />
          <input type="text" {...form.register('petName')} />
          <input type="text" {...form.register('phone')} />
          <input type="text" {...form.register('description')} />

          <Button variant="brand" type="submit">
            Agendar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
