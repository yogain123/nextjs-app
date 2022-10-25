import { useRouter } from "next/router";
import React from "react";

function SettingId({ customerData }) {
  console.log({ customerData });
  const router = useRouter();
  const queryData = router.query;
  if (!customerData) {
    return <div>Loading....</div>;
  }
  return <div>this is customer Id page, id - {JSON.stringify(queryData)} </div>;
}

const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "setting data");
  });
};

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      customerData: data,
    },
  };
};

export const getStaticPaths = async (context) => {
  return {
    paths: [{ params: { settingId: "123" } }],
    fallback: "blocking",
  };
};

export default SettingId;
