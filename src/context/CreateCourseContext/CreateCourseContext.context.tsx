import { createContext } from "react";

import { useCreateCourse } from "@/hooks";

type CreateCourseContextProps = ReturnType<typeof useCreateCourse>;

export const CreateCourseContext = createContext<
  CreateCourseContextProps | undefined
>(undefined);
