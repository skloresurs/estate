import type { AxiosResponse } from 'axios';
import { constant } from 'lodash';

import axiosCMS from './strapi-axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CMSFetcher(url: string): Promise<any> {
  return axiosCMS
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch(constant(null));
}
