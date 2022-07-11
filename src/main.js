import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/hamburger-menu";
import "./scripts/skills.js";
import "./scripts/works.js";
import "./scripts/user-profile.js";
import "./scripts/hello-parallax.js";