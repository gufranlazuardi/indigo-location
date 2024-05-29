import React from "react";

function DetailPage({ params }: { params: { id: string } }) {
  console.log("gufron", params.id);
  return <div>{params.id}</div>;
}

export default DetailPage;
