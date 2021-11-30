import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { FindStudentsResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  students = students;
  getStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  getStudentById(id) {
    return this.students.find((student) => student.id === id);
  }
}
