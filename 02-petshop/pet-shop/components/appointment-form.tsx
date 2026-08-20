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
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldLabel } from './ui/field';
import { Textarea } from './ui/textarea';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  inputGroupInputStyles,
} from './ui/input-group';
import {
  CalendarIcon,
  ChevronDownIcon,
  PawPrint,
  Phone,
  User,
} from 'lucide-react';
import { IMaskInput } from 'react-imask';
import { format, startOfToday } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório'),
  petName: z.string().min(3, 'O nome do pet é obrigatório'),
  phone: z.string().min(11, 'O telefone do tutor é obrigatório'),
  description: z.string().min(3, 'A descrição do atendimento é obrigatória'),
  scheduledAt: z
    .date({
      error: 'A data do agendamento é obrigatória',
    })
    .min(startOfToday(), 'A data do agendamento não pode ser no passado'),
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
      scheduledAt: undefined,
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

          <Field>
            <FieldLabel htmlFor="phone">Telefone</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Phone className="size-5 text-content-brand" />
              </InputGroupAddon>
              <Controller
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <IMaskInput
                    id="phone"
                    placeholder="(00) 00000-0000"
                    mask="(00) 00000-0000"
                    unmask
                    data-slot="input-group-control"
                    aria-invalid={!!form.formState.errors.phone}
                    className={inputGroupInputStyles}
                    value={field.value}
                    onAccept={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                  />
                )}
              />
            </InputGroup>
            <FieldError
              errors={
                form.formState.errors.phone ? [form.formState.errors.phone] : []
              }
            />
          </Field>

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

          <Controller
            name="scheduledAt"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="scheduledAt">Data</FieldLabel>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        data-empty={!field.value}
                        className={cn(
                          'w-full justify-between text-left font-normal',
                          !field.value && 'text-content-secondary'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <CalendarIcon
                            size={20}
                            className="text-content-brand"
                          />
                          {field.value ? (
                            format(field.value, 'dd/MM/yyyy')
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                        </div>
                        <ChevronDownIcon className="opacity-50 size-4" />
                      </Button>
                    }
                  />
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      defaultMonth={field.value}
                      disabled={(date) => date < startOfToday()}
                    />
                  </PopoverContent>
                </Popover>
                <FieldError
                  errors={
                    form.formState.errors.scheduledAt
                      ? [form.formState.errors.scheduledAt]
                      : []
                  }
                />
              </Field>
            )}
          />

          <Button variant="brand" type="submit" className="mt-2 self-end">
            Agendar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
