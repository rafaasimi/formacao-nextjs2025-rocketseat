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
  Clock,
  Loader2,
  PawPrint,
  Phone,
  User,
} from 'lucide-react';
import { IMaskInput } from 'react-imask';
import { format, setHours, setMinutes, startOfToday } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from './ui/toast';
import { createAppointment } from '@/app/actions';
import { useEffect, useState } from 'react';
import { Appointment } from '@/app/types/appointment';

const appointmentFormSchema = z
  .object({
    tutorName: z.string().min(3, 'O nome do tutor é obrigatório'),
    petName: z.string().min(3, 'O nome do pet é obrigatório'),
    phone: z.string().min(11, 'O telefone do tutor é obrigatório'),
    description: z.string().min(3, 'A descrição do atendimento é obrigatória'),
    scheduledAt: z
      .date({
        error: 'A data do agendamento é obrigatória',
      })
      .min(startOfToday(), 'A data do agendamento não pode ser no passado'),
    time: z.string().min(1, 'A hora do agendamento é obrigatória'),
  })
  .refine(
    (data) => {
      const [hour, minute] = data.time.split(':');
      const scheduleDateTime = setMinutes(
        setHours(data.scheduledAt, Number(hour)),
        Number(minute)
      );
      return scheduleDateTime > new Date();
    },
    { path: ['time'], error: 'O horário não pode ser no passado' }
  );

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

type AppointmentFormProps = {
  children?: React.ReactElement;
  appointment?: Appointment;
};

export function AppointmentForm({
  children,
  appointment,
}: AppointmentFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      tutorName: '',
      petName: '',
      phone: '',
      description: '',
      scheduledAt: undefined,
      time: '',
    },
  });

  async function onSubmit(data: AppointmentFormValues) {
    const [hour, minute] = data.time.split(':');
    const scheduledDateTime = new Date(data.scheduledAt);
    scheduledDateTime.setHours(Number(hour));
    scheduledDateTime.setMinutes(Number(minute));

    const appointmentData = {
      ...data,
      scheduledAt: scheduledDateTime,
    };

    const result = await createAppointment(appointmentData);

    if (result?.error) {
      toast.add({
        description: result.error,
        type: 'error',
      });
      return;
    }

    toast.add({
      description: 'Agendamento criado com sucesso.',
      type: 'success',
    });

    setIsOpen(false);
    form.reset();

    console.log('Agendamento realizado:', appointmentData);
  }

  useEffect(() => {
    if (appointment) {
      form.reset(appointment);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children && <DialogTrigger render={children} />}

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

          <div className="flex flex-col md:flex-row gap-4">
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

            <Field>
              <FieldLabel htmlFor="time">Hora</FieldLabel>
              <Controller
                name="time"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-invalid={!!form.formState.errors.time}>
                      <Clock className="size-4 text-content-brand" />
                      <SelectValue placeholder="--:--" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_OPTIONS.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError
                errors={
                  form.formState.errors.time ? [form.formState.errors.time] : []
                }
              />
            </Field>
          </div>
          <Button
            variant="brand"
            type="submit"
            className="mt-2 self-end min-w-23"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : appointment ? (
              'Editar'
            ) : (
              'Agendar'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function generateTimeOptions() {
  const times = [];

  for (let hour = 9; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 21 && minute > 0) break;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.push(timeString);
    }
  }

  return times;
}

const TIME_OPTIONS = generateTimeOptions();
