import { useContext } from "react";

import { CreateCourseContext } from "./CreateCourseContext.context";

export const useCreateCourseContext = () => {
  const context = useContext(CreateCourseContext);

  if (!context) {
    throw new Error(
      "useCreateCourseContext must be used within a CreateCourseProvider"
    );
  }

  return context;
};
