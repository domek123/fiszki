import { ReactNode } from "react";

import { useCreateCourse } from "@/hooks";
import { CreateCourseContext } from "./CreateCourseContext.context";

export const CreateCourseProvider = ({ children }: { children: ReactNode }) => {
  const ReportModalHookValue = useCreateCourse();

  return (
    <CreateCourseContext.Provider value={ReportModalHookValue}>
      {children}
    </CreateCourseContext.Provider>
  );
};
