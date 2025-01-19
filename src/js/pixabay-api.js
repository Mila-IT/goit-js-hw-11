import { MESSAGES, MESSAGES_BG_COLORS, showInfoMessage } from './helpers';

const options = {
  method: 'GET',
};
const API_KEY = '38683613-87ace4eebf2c3eb96700088e5';
const API_URL = 'https://pixabay.com/api/?';

export async function getGalleryData(queryValue) {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: queryValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    const response = await fetch(API_URL + searchParams, options).then();
    if (!response.ok) {
      showInfoMessage(MESSAGES.error, MESSAGES_BG_COLORS.orange);
      return;
    }
    return await response.json();
  } catch (err) {
    showInfoMessage(
      `${MESSAGES.exception} ERROR:  ${err}`,
      MESSAGES_BG_COLORS.orange
    );
  }
}