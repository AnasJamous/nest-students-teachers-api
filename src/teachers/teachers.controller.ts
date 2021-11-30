import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
  @Get()
  getTeachers() {
    return 'all teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `teacher ID ${teacherId}`;
  }

  @Get('/:teacherId/students')
  getTeacherStudents(@Param('teacherId') teacherId: string) {
    return `Students for teacher ID ${teacherId}`;
  }

  @Put('/:teacherId/students/:studentId')
  updateStudentTeacher(@Param() params) {
    return `update student Id ${params.studentId} for teacher ID ${params.teacherId}`;
  }
}
