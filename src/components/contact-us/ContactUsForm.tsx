'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { constant } from 'lodash';
import Link from 'next/link';
import { useReCaptcha } from 'next-recaptcha-v3';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import Asterisk from '../Asterisk';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { PhoneInput } from '../ui/phone-input';
import { Textarea } from '../ui/textarea';

const formSchema = z
  .object({
    username: z
      .string({
        required_error: 'Будь ласка вкажіть ваше ім’я',
      })
      .min(1, 'Будь ласка вкажіть ваше ім’я'),
    email: z
      .string({
        required_error: 'Будь ласка вкажіть вашу електронну пошту',
      })
      .email({
        message: 'Будь ласка вкажіть коректну електронну пошту',
      })
      .min(1, 'Будь ласка вкажіть вашу електронну пошту'),
    phone: z.string().optional(),
    message: z.string({ required_error: 'Будь ласка вкажіть повідомлення' }).min(1, 'Будь ласка вкажіть повідомлення'),
  })
  .strict();

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactUsForm() {
  const { executeRecaptcha } = useReCaptcha();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: FormSchemaType) {
    setIsLoading(true);
    const t = toast.loading('Надсилання повідомлення...');

    const token = await executeRecaptcha('form_submit').catch(constant(null));

    if (!token) {
      toast.error('Помилка ReCaptcha', { id: t });
      setIsLoading(false);
      return;
    }

    const response = await axios.post('/api/contact-us', { ...data, token }).catch((error) => error.response ?? null);

    if (response && response.status === 200) {
      toast.success('Повідомлення надіслано', { id: t });
      form.reset();
    } else {
      toast.error(response?.data?.error ?? 'Невідома помилка', { id: t });
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        id='contact-us'
        onSubmit={form.handleSubmit(onSubmit)}
        className='glow space-y-8 rounded-md border-2 border-border p-6'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Ваше ім’я
                <Asterisk />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-1 space-y-8 align-middle lg:grid-cols-2 lg:space-x-4 lg:space-y-0'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>
                  Ваш Email
                  <Asterisk />
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>Ваш номер телефону</FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry='UA' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Ваше повідомлення
                <Asterisk />
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-row items-center justify-between gap-4'>
          <span className='muted'>
            Цей сайт захищено технологією reCAPTCHA, до нього застосовуються{' '}
            <Link href='https://policies.google.com/privacy' target='_blank' className='text-primary'>
              Політика конфіденційності
            </Link>{' '}
            й{' '}
            <Link href='https://policies.google.com/terms' target='_blank' className='text-primary'>
              Умови використання
            </Link>{' '}
            Google.
          </span>
          <Button disabled={isLoading} type='submit' variant='ringHover'>
            Надіслати
          </Button>
        </div>
      </form>
    </Form>
  );
}
