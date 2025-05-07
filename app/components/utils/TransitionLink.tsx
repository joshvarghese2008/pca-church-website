"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const main = document.querySelector("main");
    main?.classList.add("page-transition");

    router.push(href);

    main?.classList.remove("page-transition");
  }
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
