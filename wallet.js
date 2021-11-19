/** Connect to Moralis server */
const serverUrl = "https://dr5rtzwgxthx.usemoralis.com:2053/server";
const appId = "CnulMCXl3ebVg3ol7R5xyHBHc9kfkMRh7Ta6ar1c";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;