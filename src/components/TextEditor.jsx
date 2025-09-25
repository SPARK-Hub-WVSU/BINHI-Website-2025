'use client';
import { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.core.css';

export default function TextEditor({ name, defaultValue = '' }) {
  const editorContainer = useRef(null);
  const toolbarContainer = useRef(null);

  /**
   * @type {import('quill').default | undefined}
   */
  let quill;
  let [text, setText] = useState(defaultValue);

  useEffect(() => {
    if (quill) return;

    import('quill').then((Quill) => {
      quill = new Quill.default(editorContainer.current, {
        modules: {
          toolbar: toolbarContainer.current,
        },
        theme: 'snow',
        placeholder: 'Add a description here...',
        // debug: 'info'
      });

      // Set initial content if defaultValue exists
      if (defaultValue) {
        quill.root.innerHTML = defaultValue;
      }

      quill.on('text-change', (delta, oldContent, source) => {
        if (source !== 'user') return;
  
        setText(quill.getSemanticHTML());
      })
    });

  }, [editorContainer, defaultValue]);

  return (
    <div className="border border-secondary-neutral-light rounded-xl flex flex-col h-full">
      <div
        ref={toolbarContainer}
        className="flex border-b border-secondary-neutral-light">
        <button className="ql-bold size-8 p-1"></button>
        <button className="ql-italic size-8 p-1"></button>
      </div>
      <div ref={editorContainer} className="flex-grow"></div>
      <input type="hidden" name={name} value={text} />
    </div>
  );
}
