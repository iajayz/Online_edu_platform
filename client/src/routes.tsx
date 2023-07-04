import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import StudentLoginPage from "./components/students/pages/StudentLoginPage";
import StudentRegistrationPage from "./components/students/pages/StudentRegistrationPage";
import StudentHomePage from "./components/students/pages/StudentHomePage";
import InstructorRegistrationPage from "./components/instructors/pages/InstructorRegisterPage";
import InstructorLoginPage from "./components/instructors/pages/InstructorLoginPage";
import ErrorElement from "./components/common/ErrorElement";
import AdminLoginPage from "./components/admin/pages/AdminLoginPage";
import AdminHomePage from "./components/admin/pages/AdminHomePage";
import Dashboard from "./components/admin/pages/AdminDashBoardPage";
import ViewInstructorsIndex from "./components/admin/pages/InstructorManagement/ViewInstructorsIndex";
import ViewInstructorRequests from "./components/admin/pages/InstructorManagement/ViewInstructorRequests";
import ViewBlockedInstructors from "./components/admin/pages/InstructorManagement/ViewBlockedInstructors";
import { Student, Admin } from "./App";
import ViewMoreInstructorRequest from "./components/admin/pages/InstructorManagement/ViewMoreInstructorRequest";
import { Instructor } from "./App";
import InstructorDashboard from "./components/instructors/pages/InstructorDashboard";
import AddCourse from "./components/instructors/pages/add-course/AddCourse";
import ViewCourseStudent from "./components/students/pages/Course/ViewCourse";
import WatchLessons from "./components/students/pages/Course/WatchLessons";
import ListCourseForInstructors from "./components/instructors/pages/add-lessons/ListCourseForIstructors";
import ViewLessons from "./components/instructors/pages/add-lessons/ViewLessons";
const LazyListCourse = lazy(
  () => import("./components/students/pages/Course/ListCourse")
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <StudentHomePage />,
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyListCourse />
          </Suspense>
        ),
      },
      {
        path: "/courses/:courseId",
        element: <ViewCourseStudent />,
      },
      {
        path: "/courses/:courseId/watch-lessons/:lessonId",
        element: <WatchLessons />,
      },
    ],
  },
  {
    path: "/login",
    element: (<StudentLoginPage />),
  },
  {
    path: "/register",
    element: <StudentRegistrationPage />,
  },
  {
    path: "/instructors/login",
    element: <InstructorLoginPage />,
  },
  {
    path: "/instructors/register",
    element: <InstructorRegistrationPage />,
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "admin/",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <AdminHomePage />,
      },
      {
        path: "instructors",
        element: <ViewInstructorsIndex />,
        children: [
          {
            path: "requests",
            element: <ViewInstructorRequests />,
          },
          {
            path: "requests/:id",
            element: <ViewMoreInstructorRequest />,
          },
          {
            path: "blocked",
            element: <ViewBlockedInstructors />,
          },
        ],
      },
      {
        path: "login",
        element: <AdminLoginPage />,
      },
    ],
  },
  {
    path: "instructors",
    element: <Instructor />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/instructors",
        element: <InstructorDashboard />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "view-course",
        element: <ListCourseForInstructors />,
      },
      {
        path:"view-lessons/:courseId",
        element:<ViewLessons/>,
      }
    ],
  },
]);
export default AppRouter;