import React from "react";
import widget1 from "../data/widget1";


export default function widget(props) {

    return (
    <div className="widget--root" dangerouslySetInnerHTML={{ __html: widget1 }} />
  );
}
