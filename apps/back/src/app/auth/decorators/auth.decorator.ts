import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../guards';
import { TValidRoleArray } from '../models';
import { SetRoles } from './set-roles.decorator';

export const Auth = (...roles: TValidRoleArray) =>
  applyDecorators(
    SetRoles([...roles, 'user']),
    UseGuards(AuthGuard(), RoleGuard),
  );
