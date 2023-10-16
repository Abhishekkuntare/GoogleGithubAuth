import connectMongo from "@/databse/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch((err) => res.json({ err: "Connection Error" }));

  //only post method accpet
  if (req.method == "POST") {
    if (!req.body)
      return res.status(404).json({
        error: "Don't have form data...",
      });

    const { username, email, password } = req.body;

    //check duplicte error
    const checkExiting = await Users.findOne({ email });
    if (checkExiting)
      return res.status(422).json({
        message: "User Already Exists !",
      });

    const user = await Users.create({
      username,
      email,
      password: await hash(password, 12),
    });
    res.status(201).json({
      status: true,
      user,
    });
    //hash password
    // Users.create(
    //   { username, email, password: await hash(password, 12) },
    //   function (err, data) {
    //     if (err) return res.status(404).json({ err });
    //     res.status(201).json({
    //       status: true,
    //       user: data,
    //     });
    //   }
    // );
  } else {
    res.status(500).json({
      message: "Method Not valid !",
    });
  }
}
