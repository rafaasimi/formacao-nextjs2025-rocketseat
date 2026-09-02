import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type NavitationButtonProps = {
  tooltipText: string;
  children: React.ReactNode;
  onClick: () => void;
};

export function NavigationButton({
  tooltipText,
  children,
  onClick,
}: NavitationButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={onClick}
              className="h-12 w-9 bg-transparent border-border-primary text-content-primary 
                        hover:bg-background-tertiary hover:border-border-secondary hover:text-content-primary
                        focus:visible:ring-offset-0 focus:visible:ring-1 focus-visible:ring-border-brand
                        focus:border-border-brand focus-visible:border-border-brand"
            >
              {children}
            </Button>
          }
        />
        <TooltipContent className="bg-background-tertiary">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
