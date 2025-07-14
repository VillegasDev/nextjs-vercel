import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const style = {
    color: '#0070f3',
    textDecoration:'underline'
}

interface Props {
  text: string,
  href: string,
}

export const ActiveLink:FC<Props> = ({ text, href }) => {
    const {asPath} = useRouter();
    //console.log(router);
  return ( 
  <Link style={ asPath === href ? style : null} href={href}>{text}</Link>
);
};
