import { useState } from "react";

export const useLogin = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return { login, setLogin, password, setPassword };
};
