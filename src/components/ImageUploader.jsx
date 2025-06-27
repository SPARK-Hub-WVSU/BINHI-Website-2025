'use client';

import { ArrowDownTrayIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

/** @param {import('react').InputHTMLAttributes<HTMLInputElement>} props  */
export default function ImageUploader({ name, ...props }) {
  const [file, setFile] = useState();
  const [draggedOver, setDraggedOver] = useState(false);

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
      setFile(blobURL);
    });
  }

  function onChange(e) {
    const { files } = e.target;

    if (files && files[0]) {
      let blobURL = URL.createObjectURL(files[0]);
      setFile(blobURL);
    }
  }

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragCancel}
      onDragEnd={onDragCancel}
      onDrop={onDrop}
      className="border border-dashed border-primary rounded-lg">
      <label className="h-full flex flex-col items-center justify-center p-2 aspect-[4/3] cursor-pointer">
        {draggedOver ? (
          <>
            <ArrowDownTrayIcon className="size-6 text-primary opacity-50" />
            <span className={`text-xs text-primary 'opacity-50'`}>
              drop image here
            </span>
          </>
        ) : file ? (
          <Image
            className="rounded-md max-h-full object-cover"
            src={file}
            width={640}
            height={480}
            alt="Uploaded Image"
          />
        ) : (
          <>
            <PlusIcon className="size-6 text-primary" />
            <span className="text-xs text-primary">click to add image/s</span>
          </>
        )}

        <input
          type="file"
          {...props}
          className="hidden"
          onChange={onChange}
          accept="image/*"
        />
      </label>
      <input type="hidden" value={file} name={name} />
    </div>
  );
}
