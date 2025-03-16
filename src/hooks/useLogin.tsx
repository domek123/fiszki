import { useState } from "react";

export const useLogin = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (navigation) => {
    // if (login === "domek" && password === "123") {
    //   navigation.navigate("DrawerNav");
    // }
    navigation.navigate("Main app");
  };

  return { login, setLogin, password, setPassword, handleLogin };
};
