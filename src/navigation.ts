import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import matter from 'gray-matter';

import * as fs from "fs";
import * as path from "path";

export type NavLink = {
  text: string;
  href?: string;
  links?: NavLink[];
};

function readCategoryName(folderPath: string): string {
  try {
    const categoryFile = path.join(folderPath, '_category_.json');

    let raw = fs.readFileSync(categoryFile, 'utf-8');
      // Remove caracteres de controle invisíveis
    raw = raw.replace(/[\u0000-\u001F]+/g, '');

    if (fs.existsSync(categoryFile)) {
      const data = JSON.parse(raw);
      return data.label || path.basename(folderPath);
    }
    return path.basename(folderPath);
    }
  catch (err) {
    return path.basename(folderPath).split('.')[0];
  }
}

function readMarkdownTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);
  return data.title || path.basename(filePath, '.md');
}

function buildLinks(baseDir: string, currentDir: string = ""): NavLink[] {
  const dirPath = path.join(baseDir, currentDir);

  return fs.readdirSync(dirPath)
  .filter(item => !item.toLowerCase().startsWith("index") && !item.toLowerCase().startsWith("img") && (item.toLowerCase().endsWith(".md") || item.toLowerCase().endsWith(".mdx") || !item.toLowerCase().includes('.')))
  .map((item) => {
    const itemPath = path.join(dirPath, item);
    const relPath = path.join(currentDir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      return {
        text: readCategoryName(itemPath),
        links: buildLinks(baseDir, relPath),
        href: getPermalink(`/${relPath.replace(/\\/g, "/").split('.')[0]}`)
      };
    } else {
      return {
        // text: item.split('.')[0],
        text: readMarkdownTitle(itemPath),
        href: getPermalink(`/${relPath.replace(/\\/g, "/").split('.')[0]}`)
      };
    }
  });
}

export const headerData = {links: buildLinks("./src/pages")};

// console.dir(headerData, {depth: null})
