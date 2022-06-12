import { ReactNode } from "react";
import clsx from "clsx";
import style from "./Card.module.css";

interface CardProps {
  /** Class name or array of class names that are applied to the control route */
  className?: string | string[];
  /** Card content */
  children?: ReactNode | ReactNode[];
}

export const Card = ({ className, children }: CardProps) => {
  const rootComponentName = "godaddy-card";

  const classNames = clsx([className], {
    [style.Card]: true,
  });

  return (
    <div className={classNames} data-testid={rootComponentName}>
      {children}
    </div>
  );
};
