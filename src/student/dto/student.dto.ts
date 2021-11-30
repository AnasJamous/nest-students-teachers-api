export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class PutStudentDto {
  name: string;
  teacher: string;
}

export class FindStudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}
