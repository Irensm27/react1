import './CoursesComponents.css'
import {coursesAndDurationArray} from "../../arrays/Array.ts";
import type { ICourseModel } from "../../models/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                   return <CourseComponent course={course} key={index}/>
                }
            )}
        </ul>
    )
}