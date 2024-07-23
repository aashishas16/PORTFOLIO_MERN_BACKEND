import dotenv from "dotenv"
dotenv.config()

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log(process.env.COOKIE_EXPIRE)
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

