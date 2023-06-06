import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

// Updating from The Editor to the Preview
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', () => {
  const markdown = editor.value;
  const html = marked(markdown);
  preview.innerHTML = html;
});
