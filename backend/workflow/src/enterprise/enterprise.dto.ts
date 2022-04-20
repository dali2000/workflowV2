/* eslint-disable prettier/prettier */
import { User } from "src/user/user.entity";

export interface enterpriseDTO{
    Name: string;
    Email: string;
    password: string;
    location: string;
    isActive: boolean;
    dateDeb:Date;
    dateFin:Date;
    nbJour: string;
    

}