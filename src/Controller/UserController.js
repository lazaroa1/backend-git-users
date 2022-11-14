import axios from "axios";

const gitApi = "https://api.github.com/users";

export default {
  async getUsers(request, response) {
    const { page = 1, limit = 10 } = request.headers;

    try {
      const { data } = await axios.get(
        `${gitApi}?page=${page}&per_page=${limit}&prev`
      );

      const users = {
        page,
        limit,
        data,
      };

      return response.status(200).json(users);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  },

  async getUser(request, response) {
    const { userName } = request.params;

    try {
      const user = await axios.get(`${gitApi}/${userName}`);

      return response.status(200).send(user.data);
    } catch (error) {
      response.status(400).json({ message: "deu erro" });
    }
  },

  async getRepositories(request, response) {
    const { userName } = request.params;

    try {
      const user = await axios.get(`${gitApi}/${userName}/repos`);

      return response.status(200).send(user.data);
    } catch (error) {
      response.status(400).json({ message: "deu erro" });
    }
  },
};
