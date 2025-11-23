import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    const result = this.schema.safeParse(value);

    if (!result.success) {
      const firstError = result.error.issues[0];

      throw new BadRequestException({
        message: firstError.message,
        status: 400,
      });
    }

    return result.data;
  }
}
