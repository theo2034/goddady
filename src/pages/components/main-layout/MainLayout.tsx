import { ReactNode } from "react";
import clsx from "clsx";
import style from "./MainLayout.module.css";

interface MainLayoutProps {
  /** Class name or array of class names that are applied to the control route */
  className?: string | string[];
  /** Page content */
  children?: ReactNode | ReactNode[];
}

export const MainLayout = ({ className = [], children }: MainLayoutProps) => {
  const classNames = clsx([className], {
    [style.MainLayout]: true,
  });

  const rootComponentName = "godaddy-main-layout";

  return (
    <div className={classNames} data-testid={rootComponentName}>
      <header>
        <h1>HEADER COMPONENT</h1>
      </header>
      <div id="main-and-footer">
        <main className={style.Main}>{children}</main>
        <footer className={style.Footer}>FOOTER COMPONENT</footer>
      </div>
    </div>
  );
};
