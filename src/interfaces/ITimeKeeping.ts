import { IBase } from "./IBase";

export interface ITimeKeeping extends IBase {

  id: number;

  is_ghost: boolean;

  production: boolean;

  value: string | null;

}
