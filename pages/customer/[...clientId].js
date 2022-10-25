import { useRouter } from "next/router";
import React from "react";

function ClientId() {
  const router = useRouter();
  const queryData = router.query;
  return (
    <div>This is client id - {JSON.stringify(queryData, undefined, 2)} </div>
  );
}

export default ClientId;
