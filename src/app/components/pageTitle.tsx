import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  href?: string;
  linkCaption?: string;
}

const PageTitle = (props: Props) => {
  return (
    <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-600 flex justify-between text-black"> {/* Updated gradient colors and text color */}
      <h1 className="text-xl font-medium">{props.title}</h1>
      {props.href && (
        <Link className="hover:text-yellow-200 transition-colors" href={props.href}> {/* Updated text color */}
          {props.linkCaption}
        </Link>
      )}
    </div>
  );
};



export default PageTitle;
