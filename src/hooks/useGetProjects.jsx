import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/api";

export function useGetProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 60000,
  });
}
