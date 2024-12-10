import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: boolean; message: string; code: number } {
    return {
      status: true,
      message: 'Hello World!',
      code: 200,
    };
  }

  getUser(id: string): { status: boolean; message: string; code: number; user?: any } {
    // Misalnya ada logika untuk mendapatkan data pengguna berdasarkan ID
    if (id == '1') {
      return {
        status: true,
        message: 'User ditemukan',
        code: 200,
        user: {
          id: id,
          name: 'Muhammad Dzaky'
        },
      };
    }

    if (id == '2') {
      return {
        status: true,
        message: 'User ditemukan',
        code: 200,
        user: {
          id: id,
          name: 'Haldian',
        },
      };
    }

  }

  storeBuku(title: string, author: string): { status: boolean; message: string; code: number; data?: any } {
    return {
      status: true,
      message: 'Data buku berhasil ditambahkan!',
      code: 200,
      data: {
        title: title,
        author: author,
      },
    };
  }

  login(username: string): {
    status: boolean;
    message: string;
    code: number;
    username?: string;
  } {
    return {
      status: true,
      message: 'Login berhasil',
      code: 200,
      username: username,
    };
  }

  processToken(token: string): { status: boolean; message: string; code: number; data?: any } {
    return {
      status: true,
      message: 'Token valid',
      code: 200,
      data: {
        token: token,
      },
    };
  }
}
