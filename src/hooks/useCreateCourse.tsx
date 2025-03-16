import { useEffect, useState } from "react";

export const useCreateCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  useEffect(() => {
    console.log("Course name: ", courseName);
  }, [courseName]);

  return { courseName, setCourseName, courseDescription, setCourseDescription };
};
