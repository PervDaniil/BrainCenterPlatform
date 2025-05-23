"use client";

import { useGetCourseData } from "@/hooks/useGetCourseData";

export default function CoursePage({ course_name }: {course_name: string }) {
    const { data, error, loading } = useGetCourseData(course_name);
    console.log(data, error);


    return (
        <>English course {course_name } {data}</>
    )
}