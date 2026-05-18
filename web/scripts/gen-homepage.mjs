import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(
  "C:",
  "Users",
  "User",
  ".cursor",
  "projects",
  "a-1",
  "agent-tools",
  "f0a5fcb1-1b64-4b5f-ac7e-e458c966988c.txt",
);
const out = path.join(__dirname, "..", "src", "HomePage.tsx");

const txt = fs.readFileSync(src, "utf8");
const lines = txt.split(/\n/);
const componentLines = lines.slice(39, 485);

let code = componentLines.join("\n");

code = code.replace(
  /^type LogoMinProps/m,
  `import {
  imgEllipse11,
  imgGroup1,
  imgGroup2,
  imgIconAlabugaColor,
  imgImg,
  imgLine7,
  imgLine8,
  imgLine9,
  imgLine11,
  imgLine12,
  imgLine13,
  imgPolygon1,
  imgPolygon2,
  imgPolygon4,
  imgUnion,
  imgUnion1,
  imgUnion2,
  imgUnion3,
  imgUnion4,
  imgUnion5,
  imgUnion6,
  imgUnion7,
  imgUnion8,
  imgUnion9,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector8,
  imgVector9,
  imgVector10,
  imgVector11,
  imgVector12,
  imgVector15,
  imgVector16,
  imgVector17,
  img1,
  img2,
} from "./figma-assets";
import { SIMULATION_CARD_BG } from "./figma-assets";

type LogoMinProps`,
);

code = code.replace(
  /function LogoMin\(\{ className, property1 = "Default" \}: LogoMinProps\)/,
  "function LogoMin({ className }: LogoMinProps)",
);

code = code.replace(
  /export default function Component\(\)/,
  "export function HomePage()",
);

code = code.replace(
  /style=\{\{ backgroundImage: "url\('data:image\/svg\+xml;utf8,[\s\S]*?100%\)" \}\}/g,
  "style={{ backgroundImage: SIMULATION_CARD_BG }}",
);

code = code.replace(
  /className="([^"]*)"\s+style=\{\{\s*containerType:\s*"size"\s*\}\}/g,
  'className="$1 [container-type:size]"',
);

code = code.replace(
  /type LogoMinProps = \{\s*className\?: string;\s*property1\?: "Default";\s*\};/,
  "type LogoMinProps = {\n  className?: string;\n};",
);

fs.writeFileSync(out, code, "utf8");
console.log("Wrote", out);
