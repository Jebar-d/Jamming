export function typingEffect(text, elementId, speed = 100) {
    let index = 0;
    const element = document.getElementById(elementId);
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }