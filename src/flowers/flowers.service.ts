import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService, //env config
  ) {}

  findAll() {
    console.log(this.configService.get<EnumAppMode>('ENV_NAME')); //getting env

    return this.prisma.flower.findMany();
  }

  create(dto: CreateFlowersDto) {
    return this.prisma.flower.create({ data: dto });
  }
}
