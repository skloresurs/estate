import IStrapiImage from './StrapiImage';

export default interface ICatalogItem {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  floor: number;
  bedrooms: number;
  area: number;
  price: number;
  salePrice?: number;
  images: IStrapiImage[];
  features: IFeature[];
}

export interface IFeature {
  id: number;
  feature: string;
}
