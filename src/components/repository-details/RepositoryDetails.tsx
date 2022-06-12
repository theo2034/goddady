import clsx from "clsx";
import { Card } from "../card";
import style from "./RepositoryDetails.module.css";

interface RepositoryDetailsProps {
  /** Class name or array of class names that are applied to the control route */
  className?: string | string[];
  /** Repository data */
  repository: any;
}

export const RepositoryDetails = ({
  className = [],
  repository,
}: RepositoryDetailsProps) => {
  const classNames = clsx([className], {
    [style.RepositoryDetails]: true,
  });

  const rootComponentName = "godaddy-repository-details";

  return (
    <div className={classNames} data-testid={rootComponentName}>
      <Card className={style.Details}>
        <p>
          <span>Name: </span> {repository.name}
        </p>
        <p>
          <span>Description: </span>
          {repository.description}
        </p>
        <p>
          <span>Url: </span>
          <a href={repository.git_url}>Repository url</a>
        </p>
        <p>
          <span>Language: </span>
          {repository.language}
        </p>
        <p>
          <span>Forks: </span>
          {repository.forks}
        </p>
        <p>
          <span>Open Issues: </span>
          {repository.open_issues}
        </p>

        <p>
          <span>Watchers: </span>
          {repository.watchers}
        </p>
      </Card>
    </div>
  );
};
