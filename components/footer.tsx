import React from "react";
import { footer } from "@/styles";

type Props = {
  children: JSX.Element;
};

const Footer = ({ children }: Props) => {
  return <footer className={footer()}>{children}</footer>;
};

export default Footer;
