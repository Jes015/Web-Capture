import { Reflector } from '@nestjs/core';
import { TValidRoleArray } from '../models';

export const SetRoles = Reflector.createDecorator<TValidRoleArray>();
