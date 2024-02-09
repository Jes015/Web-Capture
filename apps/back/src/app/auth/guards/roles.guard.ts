import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BadCredentialsException } from 'src/app/common/exceptions';
import { User } from 'src/app/user/entities/user.entity';
import { SetRoles } from '../decorators';
import { TValidRoleArray } from '../models';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const validRoles = this.reflector.get(SetRoles, context.getHandler());

    if (!Array.isArray(validRoles) || validRoles?.[0] == null) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userData = request.user as User;
    const userRoles = userData.roles;

    if (userData == null) {
      throw new BadCredentialsException();
    }

    const hasValidRoles = (validRoles as TValidRoleArray).every((role) =>
      userRoles.includes(role),
    );

    if (!hasValidRoles) {
      const intlInstance = new Intl.ListFormat('en', {
        style: 'long',
        type: 'conjunction',
      });

      throw new UnauthorizedException(
        `Roles needed for this route: ${intlInstance.format(validRoles)}`,
      );
    }

    return true;
  }
}
