import { IBase } from "./IBase";

export interface IBook extends IBase {
  author: string;

  title: string;
  
  id: number;

  description: string;

  type: string;

  image_path: string;

  count_rating: number;

  avg_rating: number;

}
