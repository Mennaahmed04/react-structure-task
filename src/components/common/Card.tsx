import type { ReactNode } from "react";


type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

export function Card({ title, description,  children }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {children && <div className="card-extra">{children}</div>}
    </div>
  );
}