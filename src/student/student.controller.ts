import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  PutStudentDto,
  StudentsResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentsResponseDto[] | [] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto | [] {
    return this.studentService.getStudentById(studentId);
  }

  // @Post()
  // createStudent(@Body() body: CreateStudentDto): FindStudentsResponseDto {
  //   return `create new student with the following data ${JSON.stringify(body)}`;
  // }

  // @Put('/:studentId')
  // updateStudent(
  //   @Param('studentId') studentId: string,
  //   @Body() body: PutStudentDto,
  // ): StudentsResponseDto {
  //   return `update student with id ${studentId} with data of ${JSON.stringify(
  //     body,
  //   )}`;
  // }
}
