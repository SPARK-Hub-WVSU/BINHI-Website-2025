/**
 * Removes HTML tags and decodes HTML entities from text
 * @param {string} html - HTML string to clean
 * @param {number} maxLength - Maximum length of output text
 * @returns {string} - Clean text without HTML tags or entities
 */
export function stripHtml(html, maxLength = 120) {
  if (!html) return '';
  
  // First, remove HTML tags
  let text = html.replace(/<[^>]*>/g, '');
  
  // Then decode common HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&cent;/g, '¢')
    .replace(/&pound;/g, '£')
    .replace(/&yen;/g, '¥')
    .replace(/&euro;/g, '€')
    .replace(/&copy;/g, '©')
    .replace(/&reg;/g, '®')
    .replace(/&trade;/g, '™')
    .replace(/&hellip;/g, '…')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    // Handle numeric character references
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    .replace(/&#x([a-fA-F0-9]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
  
  // Clean up problematic characters - use ultra-aggressive cleaning
  text = fixCorruptedText(cleanProblematicChars(text));
  
  // Truncate with ellipsis if needed
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

/**
 * Alternative HTML decoding using browser APIs (client-side only)
 * @param {string} html - HTML string to decode
 * @param {number} maxLength - Maximum length of output text
 * @returns {string} - Clean text without HTML tags or entities
 */
export function stripHtmlBrowser(html, maxLength = 120) {
  if (!html) return '';
  
  // Only works in browser environment
  if (typeof window !== 'undefined') {
    try {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      let text = tempDiv.textContent || tempDiv.innerText || '';
      
      // Clean up problematic characters - use ultra-aggressive cleaning
      text = fixCorruptedText(cleanProblematicChars(text));
      
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    } catch (error) {
      console.warn('Browser HTML decoding failed:', error);
    }
  }
  
  // Fallback to manual decoding
  return stripHtml(html, maxLength);
}

/**
 * Clean problematic characters that appear as "�" or other encoding issues
 * @param {string} text - Text to clean
 * @returns {string} - Clean text
 */
export function cleanProblematicChars(text) {
  if (!text) return '';
  
  // Convert Mathematical Bold Sans-Serif Unicode to regular characters
  const mathBoldMap = {
    '𝗔': 'A', '𝗕': 'B', '𝗖': 'C', '𝗗': 'D', '𝗘': 'E', '𝗙': 'F', '𝗚': 'G', '𝗛': 'H', '𝗜': 'I', '𝗝': 'J', '𝗞': 'K', '𝗟': 'L', '𝗠': 'M',
    '𝗡': 'N', '𝗢': 'O', '𝗣': 'P', '𝗤': 'Q', '𝗥': 'R', '𝗦': 'S', '𝗧': 'T', '𝗨': 'U', '𝗩': 'V', '𝗪': 'W', '𝗫': 'X', '𝗬': 'Y', '𝗭': 'Z',
    '𝗮': 'a', '𝗯': 'b', '𝗰': 'c', '𝗱': 'd', '𝗲': 'e', '𝗳': 'f', '𝗴': 'g', '𝗵': 'h', '𝗶': 'i', '𝗷': 'j', '𝗸': 'k', '𝗹': 'l', '𝗺': 'm',
    '𝗻': 'n', '𝗼': 'o', '𝗽': 'p', '𝗾': 'q', '𝗿': 'r', '𝘀': 's', '𝘁': 't', '𝘂': 'u', '𝘃': 'v', '𝘄': 'w', '𝘅': 'x', '𝘆': 'y', '𝘇': 'z',
    '𝟬': '0', '𝟭': '1', '𝟮': '2', '𝟯': '3', '𝟰': '4', '𝟱': '5', '𝟲': '6', '𝟳': '7', '𝟴': '8', '𝟵': '9'
  };
  
  let cleaned = text;
  
  // Replace mathematical bold characters
  Object.keys(mathBoldMap).forEach(boldChar => {
    const regex = new RegExp(boldChar, 'g');
    cleaned = cleaned.replace(regex, mathBoldMap[boldChar]);
  });
  
  return cleaned
    // Remove replacement characters - be more aggressive
    .replace(/[��]/g, '') // Visual replacement characters
    .replace(/\uFFFD/g, '') // Unicode replacement character
    .replace(/\u00EF\u00BF\u00BD/g, '') // UTF-8 byte sequence for replacement char
    // Remove various problematic characters
    .replace(/[\u0080-\u009F]/g, '') // Windows-1252 control characters
    .replace(/\u00A0/g, ' ') // Non-breaking space to regular space
    .replace(/[\u2000-\u200F\u2028-\u202F]/g, ' ') // Various Unicode spaces and format chars
    .replace(/[\u200B-\u200D]/g, '') // Zero-width characters
    // Remove common encoding artifacts
    .replace(/Ã¢â‚¬â„¢/g, "'") // Smart quote artifacts
    .replace(/Ã¢â‚¬Å"/g, '"') // Smart quote artifacts
    .replace(/Ã¢â‚¬/g, '') // Common prefix for encoding issues
    .replace(/â€™/g, "'") // Right single quotation mark
    .replace(/â€œ/g, '"') // Left double quotation mark
    .replace(/â€/g, '"') // Right double quotation mark
    .replace(/â€"/g, '—') // Em dash
    .replace(/â€"/g, '–') // En dash
    // Remove any remaining problematic bytes
    .replace(/[\uDC80-\uDCFF]/g, '') // High surrogate orphans
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '') // Control chars except \t \n \r
    // Clean up spacing
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Ultra-aggressive character cleaning for fixing corrupted data
 * @param {string} text - Text to clean
 * @returns {string} - Clean text
 */
export function fixCorruptedText(text) {
  if (!text) return '';
  
  let cleaned = text;
  
  // Replace common encoding artifacts with proper characters
  const replacements = [
    // Smart quotes and dashes
    [/â€™/g, "'"],
    [/â€œ/g, '"'],
    [/â€/g, '"'],
    [/â€"/g, '—'],
    [/â€"/g, '–'],
    [/â€¦/g, '…'],
    // Common UTF-8 to Latin-1 conversion issues
    [/Ã¡/g, 'á'],
    [/Ã©/g, 'é'],
    [/Ã­/g, 'í'],
    [/Ã³/g, 'ó'],
    [/Ãº/g, 'ú'],
    [/Ã±/g, 'ñ'],
    [/Ã/g, 'Á'],
    [/Ã‰/g, 'É'],
    [/Ã/g, 'Í'],
    [/Ã"/g, 'Ó'],
    [/Ãš/g, 'Ú'],
    [/Ã'/g, 'Ñ'],
    // Remove any remaining � characters
    [/[��]/g, ''],
    [/\uFFFD/g, ''],
    // Remove other problematic characters
    [/[\u0080-\u009F]/g, ''],
    [/[\u200B-\u200D]/g, ''],
    // Clean up spaces
    [/\s+/g, ' ']
  ];
  
  replacements.forEach(([pattern, replacement]) => {
    cleaned = cleaned.replace(pattern, replacement);
  });
  
  return cleaned.trim();
}

/**
 * Formats a date string to a relative time (e.g., "2 days ago")
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted relative time
 */
export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} week${Math.floor(diffInDays / 7) !== 1 ? 's' : ''} ago`;
  return `${Math.floor(diffInDays / 30)} month${Math.floor(diffInDays / 30) !== 1 ? 's' : ''} ago`;
}

/**
 * Alias for formatTimeAgo for backward compatibility
 */
export const formatRelativeDate = formatTimeAgo;

/**
 * Formats a date string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}