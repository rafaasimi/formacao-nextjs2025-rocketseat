'use client';

import {
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { addDays, format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Calendar } from '../ui/calendar';
import { NavigationButton } from './navigation-button';

export function DatePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dateParam = searchParams.get('date');

  const getInitialDate = () => {
    if (!dateParam) return;

    const [year, month, day] = dateParam.split('-').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    if (!isValid(parsedDate)) return new Date();

    return parsedDate;
  };

  const [date, setDate] = useState<Date | undefined>(getInitialDate);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleDateChange(days: number) {
    const newDate = addDays(date || new Date(), days);
    updateURLWithDate(newDate);
  }

  function updateURLWithDate(selectedDate: Date | undefined) {
    if (!selectedDate) return;

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('date', format(selectedDate, 'yyyy-MM-dd'));

    router.push(`${pathname}?${newParams.toString()}`);
  }

  function handleDateSelect(selectedDate: Date | undefined) {
    updateURLWithDate(selectedDate);
    setIsPopoverOpen(false);
  }

  useEffect(() => {
    const newDate = getInitialDate();

    if (date?.getTime() !== newDate?.getTime()) {
      setDate(newDate);
    }
  }, [date, getInitialDate]);

  return (
    <div className="flex items-center gap-2">
      <NavigationButton
        tooltipText="Data anterior"
        onClick={() => handleDateChange(-1)}
      >
        <ChevronLeft className="size-4" />
      </NavigationButton>

      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger
          render={
            <Button
              variant={'outline'}
              className="w-min[180px] justify-between text-left font-normal bg-transparent border-border-primary text-content-primary hover:bg-background-tertiary hover:border-border-secondary hover:text-content-primary focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-border-brand focus:border-border-brand focus-visible:border-border-brand"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="size-5 text-content-brand" />
                <span className="text-content-secondary">
                  {date
                    ? format(date, 'P', { locale: ptBR })
                    : 'Selecione uma data'}
                </span>
              </div>
              <ChevronDown className="size-5 text-content-primary" />
            </Button>
          }
        />

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            locale={ptBR}
            autoFocus
          />
        </PopoverContent>
      </Popover>

      <NavigationButton
        tooltipText="Data seguinte"
        onClick={() => handleDateChange(1)}
      >
        <ChevronRight className="size-4" />
      </NavigationButton>
    </div>
  );
}
