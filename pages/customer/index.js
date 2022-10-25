import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Customer() {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <Link href="/customer/123?name=yogendra">
            Go to client and deep - catch all routes
          </Link>
        </li>
        <li>
          <Link href="/customer/444/123333">
            lint to 444 - client - catch all route
          </Link>
        </li>

        <li>
          <Link href="/settings/456">go to setting id</Link>
        </li>
        {/* <li>
          <Link href="/settings">Go to setting page via link</Link>
        </li> */}
      </ul>
      <div>This is Customer page</div>
      <button onClick={() => router.push("/customer/999")} type="button">
        Take me to customer id page via button
      </button>
      <br />
      <button onClick={() => router.push("/settings/777")} type="button">
        Take me to settings page via button
      </button>
    </>
  );
}

export default Customer;
