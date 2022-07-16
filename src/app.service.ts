import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private data = require('./_metadata.json');

  getHello(): string {
    return 'This example of metadata!';
  }

  getMetaData(id: number) {
    if (id <= 0) {
      return {
        error: 'please input from 1 until 50',
      };
    } else {
      const index = id - 1;
      return this.data[index];
    }
  }
}
