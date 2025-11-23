import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ErrorMessage } from '../messages/errors';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  private readonly maxSize: number;
  private readonly allowedFormats: string[];
  constructor(
    maxSize: number,
    allowedFormats: string[] = ['image/jpeg', 'image/png', 'image/jpg'],
  ) {
    this.maxSize = maxSize;
    this.allowedFormats = allowedFormats;
  }

  transform(value: Express.Multer.File) {
    if (!value) {
      throw new BadRequestException(ErrorMessage.FILE.REQUIRED);
    }

    if (value.size > this.maxSize) {
      throw new BadRequestException(ErrorMessage.FILE.MAX_SIZE_EXCEEDED);
    }

    if (!this.allowedFormats.includes(value.mimetype)) {
      throw new BadRequestException(ErrorMessage.FILE.INVALID_TYPE);
    }
    return value;
  }
}
