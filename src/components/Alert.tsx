import { ReactNode } from "react";

interface Props {
  children: ReactNode; // type 'children' enables to write between the divs in the App, 'ReactNode' lets inserting other elements like <span>
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
