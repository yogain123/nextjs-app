import React, { useEffect, useState } from "react";
import jsonData from "./data.json";
import { useSession, signIn, getSession } from "next-auth/react";
// we can use getSession as well to get session details

function Settings({ settingsData }) {
  console.log("settings data from json", jsonData);
  console.log(typeof jsonData); // object
  const [loading, setLoading] = useState(false);
  const sessionDetails = useSession();
  const { data, status } = sessionDetails;

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    } else {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      This is settings page
      {settingsData.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}

const getdata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "setting1",
        "setting2",
        "setting3",
        "setting4",
        "setting5",
        "setting6",
        "setting7",
        "setting8",
      ]);
    }, 1000);
  });
};

export const getStaticProps = async (context) => {
  console.log("MY NAME - ", process.env.MY_NAME);
  // const data = await fetch("https://holaa.free.beeceptor.com/hola");
  const response = await getdata();
  console.log({ context });
  console.log({ response });
  return {
    props: {
      settingsData: response,
    },
    revalidate: 15, // for ISR - incremental static regeneration
  };
};

export default Settings;
