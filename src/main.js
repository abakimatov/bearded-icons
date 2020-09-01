import fs from "fs";
import defsDark from "./defsDark.js";
import defsLight from "./defsLight.js";
import icons from "./icons.js";

// const defsDark = {"bite": "poil", "chatte": "bite"};

fs.writeFile(
	"icons.json",
	JSON.stringify({
		hidesExplorerArrows: true,
		iconDefinitions: icons,
		...defsDark,
		...defsLight,
	}),
	(err) => {
		if (err) {
			console.log("error", err);
		}
	},
);
