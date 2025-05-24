import { courses } from "@/assets/data/courses";
import CoursePage from "@/components/course-page";


export async function generateStaticParams() {
  return courses.map(course => ({
    course_name: course.id
  }));
}

export default function Page({ params }: { params: { course_name: string } }) {
  return (
    <CoursePage params={params} />
)
}