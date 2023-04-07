import type { NextApiRequest, NextApiResponse } from "next";
import Webflow from "webflow-api";

const { WEBFLOW_CLIENT_ID, WEBFLOW_CLIENT_SECRET } = process.env;
const webflow = new Webflow();

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("req.body", req.body);
    const { access_token } = await webflow.accessToken({
      client_id: WEBFLOW_CLIENT_ID as string,
      client_secret: WEBFLOW_CLIENT_SECRET as string,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      code: req.body.code as string,
    });

    const app = new Webflow({ token: access_token }).;
    const { user } = await app.authenticatedUser();
    return res.status(200).json(user);
  }

  return res.status(403).end();
}
