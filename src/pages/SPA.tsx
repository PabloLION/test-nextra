import { NextPage } from "next";
import Link from "next/link";

const Spa: NextPage = () => {
  return (
    <div>
      <h1>SPA Homepage</h1>
      <p>A link to this page</p>
      <Link href="./SPA">this page</Link>
    </div>
  );
};

export default Spa;
