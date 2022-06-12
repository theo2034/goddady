import { RepositoryItem } from "../../repository-item";
import { useGetRepositoriesQuery } from "../../../store/api/githubApi";

export const RepositoryList = () => {
  const { data: repositories, isLoading } = useGetRepositoriesQuery();

  const rootComponentName = "godaddy-repository-list";

  if (isLoading) return <div>Loading...</div>;

  return (
    <div data-testid={rootComponentName}>
      {repositories?.map(({ name, id }) => (
        <RepositoryItem key={id} name={name} id={id} />
      ))}
    </div>
  );
};
