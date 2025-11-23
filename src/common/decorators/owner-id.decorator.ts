import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '../content/custom-http.exceptions';
import { ErrorMessage } from '../messages/errors';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const ownerId = request.headers['x-owner-id'];

    if (!ownerId) {
      throw new UnauthorizedException(ErrorMessage.USER.ID_NOT_FOUND);
    }

    const parsedOwnerId = parseInt(ownerId as string, 10);

    if (isNaN(parsedOwnerId)) {
      throw new UnauthorizedException(ErrorMessage.USER.UNAUTHORIZE);
    }

    return parsedOwnerId;
  },
);
