import { type GetServerSideProps } from "next";

type Props = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
  };
};

const AuthPage = ({ user }: Props) => {
  return <div>Email: {user?.email}</div>;
};

export default AuthPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // parse querystring
  const { code } = context.query;

  console.log("code", code);
  // get user data from oauth code
  const method = "POST";
  const body = JSON.stringify({ code });
  const headers = { "Content-Type": "application/json" };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = await fetch("http://localhost:3000/api/webflow-user", {
    method,
    body,
    headers,
  })
    .then((r) => r.json())
    .catch((e) => console.log(e));

  if (!user) {
    return {
      redirect: {
        destination: "/api/webflow-auth",
        permanent: false,
      },
    };
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    props: { user }, // will be passed to the page component as props
  };
};
