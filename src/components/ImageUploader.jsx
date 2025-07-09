'use client';

import { ArrowDownTrayIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/** @param {import('react').InputHTMLAttributes<HTMLInputElement>} props  */
export default function ImageUploader({ name, ...props }) {
  const [files, setFiles] = useState([]);
  const [draggedOver, setDraggedOver] = useState(false);

  useEffect(() => {
    console.log(files);
  }, [files]);

  function onDragCancel(e) {
    setDraggedOver(false);
  }

  function onDragOver(e) {
    e.preventDefault();
    setDraggedOver(true);
  }

  function onDrop(e) {
    e.preventDefault();
    setDraggedOver(false);

    if (!e.dataTransfer?.items) return;

    [...e.dataTransfer.items].forEach((item, idx) => {
      if (item.kind !== 'file') return;

      const file = item.getAsFile();
      if (!file) return;

      let blobURL = URL.createObjectURL(file);
      setFiles([...files, blobURL]);
    });
  }

  function onChange(e) {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles) {
      console.log(uploadedFiles);
      let f = [];

      for (const file of uploadedFiles) {
        let blobURL = URL.createObjectURL(file);
        f.push(blobURL);
      }

      setFiles([...files, ...f]);
    }
  }

  return (
    <>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragCancel}
        onDragEnd={onDragCancel}
        onDrop={onDrop}
        className="border border-dashed border-primary rounded-lg has-focus-within:outline"
        tabIndex={-1}>
        <label
          className="h-full flex flex-col items-center justify-center px-4 py-6 cursor-pointer"
          tabIndex={1}>
          {draggedOver ? (
            <>
              <ArrowDownTrayIcon className="size-6 text-primary opacity-50" />
              <span className={`text-xs text-primary 'opacity-50'`}>
                drop image here
              </span>
            </>
          ) : (
            <>
              <PlusIcon className="size-6 text-primary" />
              <span className="text-xs text-primary">click to add image/s</span>
            </>
          )}

          <input
            type="file"
            multiple
            {...props}
            className="fixed opacity-0 translate-[9999px]"
            onChange={onChange}
            accept="image/*"
          />
        </label>
        <input type="hidden" value={files} name={name} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {files.map(
          (f) =>
            f.length > 0 && (
              <Image
                className="rounded-md object-cover aspect-square"
                key={`uploadimg-${f}`}
                src={f}
                width={640}
                height={480}
                alt="Uploaded Image"
              />
            )
        )}
      </div>
    </>
  );
}
