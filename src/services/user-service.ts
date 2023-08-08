import axios from "axios";

type UserLoginRequest = {
  username: string;
  password: string;
};

export abstract class UserService {
  public static async login(_request: UserLoginRequest): Promise<void> {
    const response = await axios.post("http://167.172.203.231/api/portal/Login", {
      username: "rian.oliveira",
      password: "Rian#123",
    });

    console.log(response);
  }
}
