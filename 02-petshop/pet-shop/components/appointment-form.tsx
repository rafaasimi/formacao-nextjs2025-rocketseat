'use client';

import z from 'zod';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { PawPrint, User } from 'lucide-react';

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

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Field>
            <FieldLabel htmlFor="tutorName">Nome do tutor</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <User className="size-5 text-content-brand" />
              </InputGroupAddon>
              <InputGroupInput
                id="tutorName"
                placeholder="Helena Souza"
                aria-invalid={!!form.formState.errors.tutorName}
                {...form.register('tutorName')}
              />
            </InputGroup>
            <FieldError
              errors={
                form.formState.errors.tutorName
                  ? [form.formState.errors.tutorName]
                  : []
              }
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="petName">Nome do pet</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <PawPrint className="size-5 text-content-brand" />
              </InputGroupAddon>
              <InputGroupInput
                id="petName"
                placeholder="Cheddar"
                aria-invalid={!!form.formState.errors.petName}
                {...form.register('petName')}
              />
            </InputGroup>
            <FieldError
              errors={
                form.formState.errors.petName
                  ? [form.formState.errors.petName]
                  : []
              }
            />
          </Field>

          {/* <Field>
            <FieldLabel htmlFor="phone">Telefone</FieldLabel>
            <Input
              id="phone"
              placeholder="(00) 00000-0000"
              aria-invalid={!!form.formState.errors.phone}
              {...form.register('phone')}
            />
            <FieldError errors={form.formState.errors.phone ? [form.formState.errors.phone] : []} />
          </Field> */}

          <Field>
            <FieldLabel htmlFor="description">Descrição do serviço</FieldLabel>
            <Textarea
              id="description"
              placeholder="Banho e tosa"
              aria-invalid={!!form.formState.errors.description}
              {...form.register('description')}
              className="resize-none"
            />
            <FieldError
              errors={
                form.formState.errors.description
                  ? [form.formState.errors.description]
                  : []
              }
            />
          </Field>

          <Button variant="brand" type="submit" className="mt-2 self-end">
            Agendar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
