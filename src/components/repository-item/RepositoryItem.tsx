import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./RepositoryItem.module.css";
import { Card } from "../card";

interface RepositoryItemProps {
  /** Class name or array of class names that are applied to the control route */
  className?: string | string[];
  /** Address object data from address form or api return to show in component */
  name: string;
  id: string;
}

export const RepositoryItem = ({
  className = [],
  name,
  id,
}: RepositoryItemProps) => {
  const classNames = clsx([className], {
    [style.RepositoryItem]: true,
});

  const rootComponentName = "godaddy-repository-item";

  return (
    <div className={classNames} data-testid={rootComponentName}>
      <Card>
        <Link to={`/${id}`}>{name}</Link>
      </Card>
    </div>
  );
};
