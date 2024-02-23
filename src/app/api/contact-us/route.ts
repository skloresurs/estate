import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env.mjs';

export async function POST(req: NextRequest) {
  try {
    const { username, email, telephone, message, token } = await req.json();
    if (!username || !email || !message || !token) {
      return NextResponse.json({ error: "Однин або декілька обов'язкових параметрів відсутні" }, { status: 400 });
    }

    const { data } = await axios
      .post(`https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET}&response=${token}`)
      .catch(() => ({ data: { success: false } }));
    if (!data.success) {
      return NextResponse.json(
        { error: 'Captcha failed' },
        {
          status: 429,
        }
      );
    }

    const response = await axios.post(
      `${env.NEXT_PUBLIC_CMS_URL}/api/contact-us-elements`,
      {
        data: {
          username,
          email,
          telephone,
          message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${env.CMS_TOKEN_CONTACT_US}`,
        },
      }
    );

    if (response.status !== 200) {
      return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
    }
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
  }
}
