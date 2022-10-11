import { IBase } from "./IBase";

export interface IComment extends IBase {
  id: string;

  content: string;

  user_id: string;
  
  book_id: string;

  updated_at: Date;
}
