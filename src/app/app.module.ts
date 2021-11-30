import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { TeachersController } from 'src/teachers/teachers.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeachersController],
  providers: [StudentService],
})
export class AppModule {}
