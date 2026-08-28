import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverTrigger } from './ui/popover';

export function DatePicker() {
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'}>
        <ChevronLeft className="size-4" />
      </Button>

      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant={'outline'}
              className="w-min[180px] justify-between text-left font-normal bg-transparent border-border-primary text-content-primary hover:bg-background-tertiary hover:border-border-secondary hover:text-content-primary focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-border-brand focus:border-border-brand focus-visible:border-border-brand"
            >
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-content-brand" />
                <span className="text-content-secondary">
                  Selecione uma data
                </span>
              </div>
              <ChevronDown className="size-5 text-content-primary" />
            </Button>
          }
        />
      </Popover>

      <Button variant={'outline'}>
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
