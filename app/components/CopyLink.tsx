'use client';

import { useState } from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

export default function CopyLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
      aria-live="polite"
      aria-pressed={copied}
      aria-label={copied ? 'Copied' : 'Copy link'}
      title={copied ? 'Copied' : 'Copy link'}
    >
      {/* Clipboard icon (from MUI) */}
      <ContentCopyRoundedIcon fontSize="small" className="mr-2" aria-hidden="true" />

      <span className="truncate">{copied ? 'Copied!' : 'Copy link'}</span>

      {/* Tooltip with fade + slight translate and pulse on copied */}
      <span
        role="tooltip"
        className={`pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity transition-transform duration-150 ${hover || copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        {copied ? 'Copied to clipboard' : 'Copy link'}
      </span>
    </button>
  );
}
