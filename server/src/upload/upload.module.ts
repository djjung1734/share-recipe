import { UploadController } from './upload.controller';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: 'image',
    }),
  ],
  controllers: [UploadController],
})
export class UploadModule {}
