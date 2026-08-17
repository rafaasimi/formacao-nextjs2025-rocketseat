'use client';

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

export function AppointmentForm() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="brand">Novo agendamento</Button>}
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agende um atendimento</DialogTitle>
          <DialogDescription>
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="brand">Agendar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
