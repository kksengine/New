import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class RegisterSuccessReturn {
  result: {
    success: boolean;
    email: string;
    statusCode: number;
  };
}

export class LoginData {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class JwtToken {
  @IsString()
  token: string;
}

export class JwtTokenReturn {
  result: {
    email: string;
    token: string;
  };
}
