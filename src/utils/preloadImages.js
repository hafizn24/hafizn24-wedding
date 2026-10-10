/**
 * Preload a single image with a timeout so the loader never hangs forever.
 * If `fallbackSrc` is given and the primary fails, the fallback is tried.
 * Resolves to { src, ok } — never rejects.
 */
export const preloadImage = (src, timeoutMs = 15000, fallbackSrc = null) => {
  return new Promise((resolve) => {
    if (!src && !fallbackSrc) {
      resolve({ src, ok: false });
      return;
    }
    let settled = false;
    let timer;
    const done = (ok, finalSrc) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ src: finalSrc, ok });
    };

    const load = (url, isFallback) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (isFallback || !fallbackSrc) done(false, url);
        else load(fallbackSrc, true);
      }, timeoutMs);

      const img = new Image();
      img.onload = () => done(true, url);
      img.onerror = () => {
        if (!isFallback && fallbackSrc) load(fallbackSrc, true);
        else done(false, url);
      };
      img.src = url;
    };

    load(src || fallbackSrc, !src);
  });
};

/**
 * Preload a list of image URLs (or { src, fallback } entries) reporting progress.
 * Uses allSettled semantics — resolves even if some images fail.
 *
 * @param {Array<string | { src: string, fallback?: string }>} entries
 * @param {(loaded: number, total: number) => void} [onProgress]
 * @param {number} [timeoutMs]
 * @returns {Promise<Array<{src: string, ok: boolean}>>}
 */
export const preloadAll = async (entries, onProgress, timeoutMs = 15000) => {
  const seen = new Set();
  const list = (entries || [])
    .map((e) => (typeof e === 'string' ? { src: e } : e))
    .filter((e) => e?.src && !seen.has(e.src) && (seen.add(e.src), true));
  const total = list.length;
  if (total === 0) {
    onProgress?.(1, 1);
    return [];
  }
  const results = [];
  for (const entry of list) {
    // Sequential keeps progress bar smooth + avoids burst on slow networks.
    const r = await preloadImage(entry.src, timeoutMs, entry.fallback || null);
    results.push(r);
    onProgress?.(results.length, total);
  }
  return results;
};

/**
 * Wait for webfonts so text doesn't flash with fallback fonts after reveal.
 * Never rejects — resolves after timeout.
 */
export const waitForFonts = async (timeoutMs = 4000) => {
  try {
    if (!document.fonts?.ready) return;
    await Promise.race([
      document.fonts.ready,
      new Promise((res) => setTimeout(res, timeoutMs)),
    ]);
  } catch {
    // ignore — fonts are progressive enhancement
  }
};

/**
 * Build the list of critical assets for an invitation config.
 * Includes both backgrounds + the couple initial/monogram.
 */
export const getInvitationAssets = (config) => {
  if (!config) return [];
  const themeId = config.theme?.id || config.themeName;
  const assets = [];
  if (themeId) {
    assets.push(`/theme/${themeId}/first.png`, `/theme/${themeId}/second.png`);
  }
  if (config.initial) assets.push({ src: config.initial });
  return assets;
};

export default { preloadImage, preloadAll, waitForFonts, getInvitationAssets };
