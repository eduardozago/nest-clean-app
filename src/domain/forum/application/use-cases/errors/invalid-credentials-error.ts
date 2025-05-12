import { UseCaseError } from '@/core/errors/use-case-error'

export class InvalidCredentialError extends Error implements UseCaseError {
  constructor() {
    super('Invalid credentials')
  }
}
