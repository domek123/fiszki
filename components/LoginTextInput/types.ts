import { Dispatch, SetStateAction } from "react";

export type LoginTextFieldProps = {
  /**
   * value
   */
  value: string;
  /**
   * on change function
   */
  onChange: Dispatch<SetStateAction<string>>;
  /**
   * placeholder text
   */
  placeholderText: string;
};
