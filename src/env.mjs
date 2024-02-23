/* eslint-disable no-console */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CMS_URL: z
      .string({ required_error: 'NEXT_PUBLIC_CMS_URL is required' })
      .url('NEXT_PUBLIC_CMS_URL must be a valid URL'),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z
      .string({ required_error: 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required' })
      .min(1, 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required'),
    NEXT_PUBLIC_CMS_TOKEN: z
      .string({ required_error: 'NEXT_PUBLIC_CMS_TOKEN is required' })
      .min(1, 'NEXT_PUBLIC_CMS_TOKEN is required'),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_CMS_TOKEN: process.env.NEXT_PUBLIC_CMS_TOKEN,
  },
  onInvalidAccess: () => {
    throw new Error('❌ Attempted to access a server-side environment variable on the client');
  },
  onValidationError: (error) => {
    console.error('❌ Invalid environment variables:', error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  },

  server: {
    CMS_TOKEN_CONTACT_US: z
      .string({ required_error: 'CMS_TOKEN_CONTACT_US is required' })
      .min(1, 'CMS_TOKEN_CONTACT_US is required'),
    RECAPTCHA_SECRET: z
      .string({ required_error: 'RECAPTCHA_SECRET is required' })
      .min(1, 'RECAPTCHA_SECRET is required'),
  },
});
