import '../styles/styles.css'
import '../styles/modern-normalize.css'
import '../styles/components/header.css'
import '../styles/components/start.css'
import '../styles/components/hero.css'
import '../styles/styles.css'
import '../styles/modern-normalize.css'
import '../styles/components/header.css'
import '../styles/components/start.css'
import '../styles/components/hero.css'
import '../styles/components/work.css'
import '../styles/components/js__examples.css'
import '../styles/components/contact.css'
import '../styles/components/about.css'
import '../styles/components/carousel.css'
import '../styles/components/footer.css'
import '../styles/utils.css'

import { example1 } from './utils/alert-box.js';
import darkMode from './utils/dark-mode.js';
import { changeBackgroundColor, resetBackgroundColor } from './utils/change-bg.js';
import { showDateTime } from './utils/dateTime.js';
import { example5 } from './utils/countdown.js';
import { typingEffect } from './utils/typingEffect.js';
import { quotes } from './utils/quotes.js';
import { copyToClipboard } from './utils/clipboard.js';
import { checkNetworkStatus } from './utils/net.js';
import { showGreeting } from './utils/greeting.js'; 

document.getElementById('example1-btn').addEventListener('click', example1);
document.getElementById('example3-btn').addEventListener('click', changeBackgroundColor);
document.getElementById('reset-btn').addEventListener('click', resetBackgroundColor);
document.getElementById('datetime-btn').addEventListener('click', showDateTime);
document.getElementById('example5-btn').addEventListener('click', example5);
document.getElementById('example6-btn').addEventListener('click', () => {
  typingEffect("This is a typing effect example!", "typeTarget");
});
document.getElementById('quotes-btn').addEventListener('click', () => {
  const quoteDisplay = document.getElementById('quote-display');
  quotes(quoteDisplay);
});
document.getElementById('clipboard-btn').addEventListener('click', () => {
  copyToClipboard('clipboard-text');
});

checkNetworkStatus('network-status');

showGreeting('greeting-message');

darkMode();