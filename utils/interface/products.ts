type priceOption = {
  optionName: string;
  price: string;
};

export interface IProducts {
  id: number;
  tag: string;
  logoSrc?: string;
  imageSrc: string;
  title: string;
  subTitle?: string;
  option?: {
    benefit?: number;
    duration?: number;
  };

  range?: number;
  price?: string;
  prices?: Array<priceOption>;
  open?: string;
}
