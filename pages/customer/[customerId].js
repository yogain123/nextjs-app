import { useRouter } from "next/router";
import React from "react";

function CustomerId({ customerData }) {
  console.log({ customerData });
  const router = useRouter();
  const queryData = router.query;
  return <div>this is customer Id page, id - {JSON.stringify(queryData)} </div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      customerData: ["customer1", "customer2"],
    },
  };
};

export const getStaticPaths = (context) => {
  return {
    paths: [
      { params: { customerId: "123" } },
      { params: { customerId: "444" } },
      { params: { customerId: "999" } },
    ],
    fallback: true,
  };
};

export default CustomerId;
