'use client';

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom';
import { RiArrowRightLine } from "react-icons/ri"

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      color="gray.100"
      variant="surface"
      loading={pending}
      loadingText="Loading"
    >
      {!pending && ( <RiArrowRightLine /> )}
      <span aria-live="polite" className="sr-only" role="status">
        {children}
      </span>
    </Button>
  );
}
