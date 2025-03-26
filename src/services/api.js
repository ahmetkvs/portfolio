import axios from "axios";

export function getProjects() {
  return axios
    .get("https://gjkxmp-simple-projects-api.vercel.app/api/projects")
    .then((resp) => {
      return resp.data;
    });
}
