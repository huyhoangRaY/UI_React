import { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgClass,
}: JobProps): Element => {
  return (
    <div className={`${bgClass} p-4`}>
      <p>Random SG text 1</p>
    </div>
  );
};
