import { IBase } from "src/interfaces/IBase";

export interface AvatarDto {
  name: string;

  img: {
    data: Buffer;
    contentType: string;
  };

  id?: number;
}
