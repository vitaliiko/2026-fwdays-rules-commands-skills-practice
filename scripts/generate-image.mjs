import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const DEFAULT_OUTPUT = 'generated-image.png';
const DEFAULT_SIZE = '1024x1024';

const loadEnvFile = async (path = '.env') => {
  if (!existsSync(path)) {
    return;
  }

  const contents = await readFile(path, 'utf8');
  for (const line of contents.split(/\r?\n/)) {
    if (!line || line.trim().startsWith('#')) {
      continue;
    }
    const [key, ...rest] = line.split('=');
    if (!key) {
      continue;
    }
    const value = rest.join('=').trim();
    if (key && value && !process.env[key]) {
      process.env[key] = value;
    }
  }
};

const prompt = process.argv[2];
const outputPath = process.argv[3] || DEFAULT_OUTPUT;
const size = process.argv[4] || DEFAULT_SIZE;

if (!prompt) {
  console.error('Usage: node scripts/generate-image.mjs "prompt" [outputPath] [size]');
  process.exit(1);
}

await loadEnvFile();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('Missing OPENAI_API_KEY. Add it to a .env file or your environment.');
  process.exit(1);
}

const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'dall-e-3',
    prompt,
    n: 1,
    size,
  }),
});

if (!response.ok) {
  const errorText = await response.text();
  console.error(`OpenAI API error (${response.status}): ${errorText}`);
  process.exit(1);
}

const data = await response.json();
const imageUrl = data?.data?.[0]?.url;
let imageData = null;
if (imageUrl) {
  const imgResp = await fetch(imageUrl);
  if (!imgResp.ok) {
    console.error('Failed to fetch image from OpenAI URL.');
    process.exit(1);
  }
  imageData = Buffer.from(await imgResp.arrayBuffer());
}

if (!imageData) {
  console.error('No image data returned from the API.');
  process.exit(1);
}

await writeFile(outputPath, imageData);
console.log(`Image saved to ${outputPath}`);
