import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";




interface Props {
    className ?: string,
    children : React.ReactElement | ( ({active}:{active : boolean}) => React.ReactElement ),
    href : string,
    as? : string,
}


export default function ActiveLink({children ,...props} : Props) {

    const { asPath } = useRouter();
    const active = asPath ===props.href || asPath===props.as;

    return (
        
        <Link {...props}>
        {
            typeof children === 'function'
            ? children({active})
            : children 
        }
        </Link>
    )
};


