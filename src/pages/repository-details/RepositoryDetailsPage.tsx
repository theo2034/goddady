import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRepositoriesQuery } from "../../store/api/githubApi";
import { RepositoryDetails } from "../../components/repository-details";
import { Repository } from "../../store/api/githubApi/types";

const RepositoryDetailsPage = () => {
  const [repository, setRepository] = useState<Repository | null>();

  const params = useParams();
  const { data: repositories } = useGetRepositoriesQuery();

  useEffect(() => {
    const result = repositories?.find(
      (repo) => repo.id.toString() === params.id
    );

    if (!result) {
      setRepository(null);
    } else {
      setRepository(result);
    }
  }, [params.id, repositories]);

  if (repository === undefined) return <div>Loading...</div>;
  if (repository === null) return <div>Not found</div>;

  return <RepositoryDetails repository={repository} />;
};

export default RepositoryDetailsPage;
