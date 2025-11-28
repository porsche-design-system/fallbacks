import * as fs from 'node:fs';
import * as path from 'node:path';
import { CDN_BASE_URL_CN, CDN_BASE_URL_COM } from '../../cdn.config';
import { generateBrowserSupportFallbackScriptPartial } from './generateBrowserSupportFallbackScriptPartial';
import { generateCookiesFallbackScriptPartial } from './generateCookiesFallbackScriptPartial';

const generateSharedCode = (): string => {
  return `import type { Cdn, Format, FormatWithCSP, FormatWithJS } from '../shared';
import { throwIfRunInBrowser, getSha256Hash } from '../shared';

const getCdnBaseUrl = (cdn: Cdn): string => (cdn === 'cn' ? '${CDN_BASE_URL_CN}' : '${CDN_BASE_URL_COM}');
`;
};

const generatePartials = async (): Promise<void> => {
  const targetDirectory = path.normalize('./src/lib');
  const targetFile = path.resolve(targetDirectory, 'partials.tsx');

  const content = [
    generateSharedCode(),
    generateBrowserSupportFallbackScriptPartial(),
    generateCookiesFallbackScriptPartial(),
  ].join('\n\n');

  fs.mkdirSync(targetDirectory, { recursive: true });
  fs.writeFileSync(targetFile, content);
};

generatePartials().catch((e) => {
  console.error(e);
  process.exit(1);
});
