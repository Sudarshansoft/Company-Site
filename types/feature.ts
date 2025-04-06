import { ReactNode } from "react";

export type Feature = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  additionalDetails: ReactNode;
};
