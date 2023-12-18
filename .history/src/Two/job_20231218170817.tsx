import { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgColor,
}: JobProps): Element => {
  return (
    <div className="bg-gray-200 p-4">
      <p>Random SG text 1</p>
    </div>
  );
};
