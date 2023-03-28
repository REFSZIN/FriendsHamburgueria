import { ApplicationError } from "@/protocols";

export function invalidCredentialsError(error?: string): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect " || error,
  };
}

export function resourceNotFoundError(error: string): ApplicationError {
  return {
    name: "InvalidIdRefersError",
    message: error
  };
}
