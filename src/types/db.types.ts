export type Course = {
  /**
   * course id
   */
  id: string;
  /**
   * course name
   */
  name: string;
  /**
   * course description
   */
  description: string;
  /**
   * course language
   */
  lang: string;
};

export enum Language {
  EN = "en",
  PL = "pl",
}
