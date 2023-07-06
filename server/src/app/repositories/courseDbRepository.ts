import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import { AddCourseInfoInterface } from '@src/types/courseInterface';
import { CreateLessonInterface } from '@src/types/lesson';

export const courseDbRepository = (
  repository: ReturnType<CourseRepositoryMongoDbInterface>
) => {
  const addCourse = async (courseInfo: AddCourseInfoInterface) =>
    await repository.addCourse(courseInfo);
  
  const getAllCourse = async ()=> await repository.getAllCourse()

  const getCourseById = async (courseId:string) => await repository.getCourseById(courseId)

  const getCourseByInstructorId = async (instructorId:string) => await repository.getCourseByInstructorId(instructorId)

  const addLesson = async (courseId:string,instructorId:string,lesson:CreateLessonInterface)=> await repository.addLesson(courseId,instructorId,lesson)

  const getLessonsByCourseId = async (courseId:string)=> await repository.getLessonsByCourseId(courseId)

  const getLessonById = async (lessonId:string)=> await repository.getLessonById(lessonId)

  return {
    addCourse,
    getAllCourse,
    getCourseById,
    getCourseByInstructorId,
    addLesson,
    getLessonsByCourseId,
    getLessonById
  };
};
export type CourseDbRepositoryInterface = typeof courseDbRepository;
