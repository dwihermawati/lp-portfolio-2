import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogBody className='relative'>
          <Image
            src={
              variant === 'success'
                ? '/Icons/ilustrasi-dialog-form-success.svg'
                : '/Icons/ilustrasi-dialog-form-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={120}
            height={120}
            className='absolute right-1/2 bottom-1/2 translate-x-1/2 -translate-y-[63%] md:size-40'
          />
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Oops! Something went wrong.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : `We couldn't send your message. Please try again later or contact us directly.`}
          </DialogDescription>
          <DialogClose asChild>
            <Button asChild className='mx-auto w-full md:max-w-90.25'>
              <Link href={variant === 'success' ? '#home' : '#contact'}>
                {loading
                  ? 'Loading...'
                  : variant === 'success'
                    ? 'Back to Home'
                    : 'Try Again'}
              </Link>
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
