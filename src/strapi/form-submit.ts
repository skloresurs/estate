import axiosCMS from '@/libs/strapi-axios';

interface IResponse {
  ok: boolean;
  error?: string;
}

export default async function SubmitForm(formData: unknown, token: string): Promise<IResponse> {
  return axiosCMS
    .post('/ezforms/submit', {
      token,
      formName: 'contact-us',
      formData,
    })
    .then((res) => ({
      ok: res.status === 200,
      error: res.data.message,
    }))
    .catch(() => ({
      ok: false,
      error: 'Помилка під час відправлення форми',
    }));
}
