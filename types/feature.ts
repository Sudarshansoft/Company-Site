import { ReactNode } from "react";

export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  additionalDetails: ReactNode;
};
