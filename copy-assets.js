import fs from 'fs';
import path from 'path';

const brainDir = "C:/Users/Ayush Pathak/.gemini/antigravity-ide/brain/e2a846ac-b740-409b-b751-d583a9835ed1";
const pubDir = "c:/Portfolio/public";

if (!fs.existsSync(pubDir)) {
  fs.mkdirSync(pubDir, { recursive: true });
}

const copyMap = [
  ["profile_photo_1791013801162.jpg", "profile.jpg"],
  ["regulo_ai_mockup_1791013857096.jpg", "regulo.jpg"],
  ["skypath_mockup_1791013923744.jpg", "skypath.jpg"],
  ["healthcare_rag_mockup_1791013963756.jpg", "healthcare.jpg"]
];

copyMap.forEach(([src, dest]) => {
  const srcPath = path.join(brainDir, src);
  const destPath = path.join(pubDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.error(`Not found: ${srcPath}`);
  }
});
