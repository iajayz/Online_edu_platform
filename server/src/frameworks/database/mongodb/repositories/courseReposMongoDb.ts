import Course from '../models/course';
import Quiz from '../models/quiz';
import mongoose from 'mongoose';
import Lessons from '../models/lessons';
import {
  AddCourseInfoInterface,
  AddQuizInfoInterface
} from '@src/types/courseInterface';
import { CreateLessonInterface } from '@src/types/lesson';

export const courseRepositoryMongodb = () => {
  const addCourse = async (courseInfo: AddCourseInfoInterface) => {
    const newCourse = new Course(courseInfo);
    newCourse.price ? (newCourse.isPaid = true) : (newCourse.isPaid = false);
    const { _id: courseId } = await newCourse.save();
    return courseId;
  };
  const addQuiz = async (
    quiz: AddQuizInfoInterface
  ) => {
    const newQuiz = new Quiz(quiz);
    const { _id: quizId } = await newQuiz.save();
    return quizId;
  };
  const getAllCourse = async () => {
    const courses = await Course.find({});
    return courses;
  };

  const getCourseById = async (courseId: string) => {
    const course = await Course.findOne({
      _id: new mongoose.Types.ObjectId(courseId)
    });
    return course;
  };

  const getCourseByInstructorId = async (instructorId: string) => {
    const courses = await Course.find({
      instructorId: new mongoose.Types.ObjectId(instructorId)
    });
    return courses;
  };

  const addLesson = async (
    courseId: string,
    instructorId: string,
    lesson: CreateLessonInterface
  ) => {
    lesson.courseId = courseId;
    lesson.instructorId = instructorId;
    const newLesson = new Lessons(lesson);
    const { _id } = await newLesson.save();
    return _id;
  };

  const getLessonsByCourseId = async (courseId: string) => {
    const lessons = await Lessons.find({
      courseId: new mongoose.Types.ObjectId(courseId)
    });
    return lessons;
  };

  return {
    addCourse,
    addQuiz,
    getAllCourse,
    getCourseById,
    getCourseByInstructorId,
    addLesson,
    getLessonsByCourseId
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;