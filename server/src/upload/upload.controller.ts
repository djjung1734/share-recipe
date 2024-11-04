import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';

@Controller()
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('upload', {
      storage: diskStorage({
        //파일 저장 위치
        destination: 'image',
        //저장되는 파일명
        filename: editFileName,
      }),
      //파일종류 업로드 제어
      fileFilter: imageFileFilter,
    }),
  )
  async uploadFile(@UploadedFile() upload) {
    const response = {
      originalname: upload.originalname,
      filename: upload.filename,
      url: 'http://192.168.55.220:3000/api/upload/' + upload.filename,
    };
    return response;
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: 'image',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFile() files) {
    const response = [];
    files.forEach((file) => {
      const fileResponse = {
        originalname: file.originalname,
        filename: file.filename,
        url: 'http://192.168.55.220:3000/api/upload/' + file.filename,
      };
      response.push(fileResponse);
    });
    return response;
  }

  @Get(':imgpath')
  getUploadedFile(@Param('imgpath') image, @Res() response) {
    return response.sendFile(image, { root: 'image' });
  }
}
