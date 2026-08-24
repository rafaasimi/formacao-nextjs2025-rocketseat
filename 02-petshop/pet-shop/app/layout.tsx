import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './styles/globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Mundo Pet - Agendamento de serviços para petshop',
  description: 'Sistema de agendamento de serviços para petshop',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        'h-full',
        'antialiased',
        inter.variable,
        interTight.variable
      )}
    >
      <body className="min-h-full flex flex-col container">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
