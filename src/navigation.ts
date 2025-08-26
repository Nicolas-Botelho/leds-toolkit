import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

import * as fs from "fs";
import * as path from "path";

type NavLink = {
  text: string;
  href?: string;
  links?: NavLink[];
};

function buildLinks(baseDir: string, currentDir: string = ""): NavLink[] {
  const dirPath = path.join(baseDir, currentDir);

  return fs.readdirSync(dirPath)
  .filter(item => !item.toLowerCase().startsWith("index") && !item.toLowerCase().endsWith(".json"))
  .map((item) => {
    const itemPath = path.join(dirPath, item);
    const relPath = path.join(currentDir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      return {
        text: item,
        links: buildLinks(baseDir, relPath),
      };
    } else {
      return {
        text: item.split('.')[0],
        href: getPermalink(`/${relPath.replace(/\\/g, "/").split('.')[0]}`)
      };
    }
  });
}

export const headerData = {links: buildLinks("./src/pages")};

// console.dir(headerData, {depth: null})
