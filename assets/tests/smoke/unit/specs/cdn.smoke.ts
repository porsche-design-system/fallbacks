import mime from 'mime';
import { describe, expect, test } from 'vitest';
import { CDN_BASE_URL_COM } from '../../../../../cdn.config';
import {CDN_BASE_PATH, FALLBACKS_MANIFEST} from "../../../../index";

describe('cdn', () => {
  let fetchCounter = 0;

  function unpackObject(obj: Object): any[] {
    return typeof obj === 'object' ? Object.values(obj).map(unpackObject) : typeof obj === 'string' ? obj : null;
  }

  function objectToFlatArray(object: Object): string[] {
    return unpackObject(object)
      .flat(3)
      .filter((x) => x !== null);
  }

  function bulkRequestItems(chunks: string[], baseUrl: string): void {
    for (const chunk of chunks) {
      test(`should exist and have correct headers: ${chunk}`, async () => {
        const { status, headers } = await fetch(`${baseUrl}/${chunk}`);
        // Mime library returns application/javascript but should be text/javascript
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        const ext = chunk.split('.').pop();
        const mimeType = ext === 'js' ? 'text/javascript' : mime.getType(ext);

        expect(status).toBe(200); // 200: OK
        expect(headers.get('content-type')).toBe(mimeType);
        expect(headers.get('access-control-allow-origin')).toBe('*');
        expect(headers.get('cache-control')).toBe('max-age=31536000');

        fetchCounter++;
      });
    }

    test(`should have all ${chunks.length} ${baseUrl.substring(baseUrl.lastIndexOf('/') + 1)}`, () => {
      expect(fetchCounter).toBe(chunks.length);
      fetchCounter = 0; // reset for upcoming test
    });
  }

  describe('fallbacks', () => {
    const fallbacks = objectToFlatArray(FALLBACKS_MANIFEST);
    bulkRequestItems(fallbacks, `${CDN_BASE_URL_COM}${CDN_BASE_PATH}`);
  });
});
