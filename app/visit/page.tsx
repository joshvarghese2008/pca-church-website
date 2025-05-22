import VisitForm from "./form";
import styles from "./page.module.css";
import { Metadata } from "next";
import { motion } from "motion/react";
import VisitContent from "./visitContent";

export const metadata: Metadata = {
  title: "Visit",
  description: "Visit our church. Sunday Service: 9am - 11:30am",
};

export default function Visit() {

  return (
    <VisitContent />
  );
}
