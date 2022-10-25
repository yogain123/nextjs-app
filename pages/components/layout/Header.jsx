import classes from "../../../styles/Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const sessionDetails = useSession();
  const { data, status } = sessionDetails;
  console.log({ data });
  return (
    <div className={classes.header}>
      This is header
      <hr />
      {status === "authenticated" && status !== "loading" && (
        <button
          onClick={() => {
            signOut("github");
          }}
          type="button"
        >
          SIGN OUT
        </button>
      )}
      {status === "unauthenticated" && status !== "loading" && (
        <button
          onClick={() => {
            signIn("github");
          }}
          type="button"
        >
          SIGN IN
        </button>
      )}
      {status === "loading" && <div>Loading...</div>}
    </div>
  );
}

export default Header;
