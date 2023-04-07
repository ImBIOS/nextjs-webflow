import type { NextApiRequest, NextApiResponse } from "next";
import Webflow from "webflow-api";

const { WEBFLOW_CLIENT_ID, WEBFLOW_CLIENT_SECRET } = process.env;
const webflow = new Webflow();

type Data = {
  access_token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const url = webflow.authorizeUrl({
      client_id: WEBFLOW_CLIENT_ID as string,
    });
    return res.redirect(url);
  }

  return res.status(403).json({ access_token: "" });
}
