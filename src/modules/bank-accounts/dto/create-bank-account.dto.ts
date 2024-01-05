import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BankAccountType } from "../entities/BankAccount";

export class CreateBankAccountDto {
    @IsString()
    @IsNotEmpty()
    name: String;

    @IsNumber()
    @IsNotEmpty()
    initialBalance: Number;

    @IsString()
    @IsEnum(BankAccountType)
    type: BankAccountType;

    @IsString()
    @IsNotEmpty()
    color: String;
}
