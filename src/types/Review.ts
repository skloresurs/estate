import IStrapiImage from './StrapiImage';

export default interface IReview {
  id: number;
  name: string;
  review: string;
  title: string;
  avatar?: IStrapiImage;
}
