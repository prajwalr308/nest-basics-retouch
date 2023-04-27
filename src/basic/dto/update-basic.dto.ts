import { PartialType } from '@nestjs/mapped-types';
import { CreateBasicDto } from './create-basic.dto';

export class UpdateNameDto extends PartialType(CreateBasicDto) {}
