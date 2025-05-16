'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { motion, useAnimation } from 'motion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { z } from 'zod';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Button } from './button';
import FormStatusDialog from './formStatusDialog';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const controls = useAnimation();

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  };

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error sending email:', error);
      }
      setVariant('error');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <motion.form
          className='w-full space-y-4'
          onSubmit={form.handleSubmit(onSubmit, () => {
            controls.start(shakeAnimation);
          })}
          animate={controls}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input
                  disabled={loading}
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input
                  disabled={loading}
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea
                  disabled={loading}
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className='mt-4 flex w-full md:mt-6'>
            <Icon icon='tabler:send' className='size-5' color='#FDFDFD' />
            {loading ? <BeatLoader size={20} color='#fff' /> : 'Submit'}
          </Button>
        </motion.form>
      </Form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </>
  );
};

export default ContactForm;
