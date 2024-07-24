import dotenv from "dotenv"
dotenv.config()

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log(process.env.COOKIE_EXPIRE)
  console.log("expire")
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    secure: true, // Ensure secure if using HTTPS
    sameSite: 'None' // Necessary for cross-site requests
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

