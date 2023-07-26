import { ReactNode } from "react";

interface Props {
  children: ReactNode; // type 'children' enables to write between the divs in the App, 'ReactNode' lets inserting other elements like <span>
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
