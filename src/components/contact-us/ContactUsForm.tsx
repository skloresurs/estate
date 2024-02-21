'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Asterisk from '../Asterisk';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
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
    phone: z.string(),
    message: z.string({ required_error: 'Будь ласка вкажіть повідомлення' }).min(1, 'Будь ласка вкажіть повідомлення'),
  })
  .strict();

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactUsForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormSchemaType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        id='contact-us'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 rounded-md border-2 border-border p-6'
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
                  <Input {...field} />
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
          <span className='muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
}
