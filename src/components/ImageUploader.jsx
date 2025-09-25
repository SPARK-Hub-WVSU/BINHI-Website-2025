'use client';

import { ArrowDownTrayIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/** @param {import('react').InputHTMLAttributes<HTMLInputElement>} props  */
export default function ImageUploader({ name, defaultImages = [], ...props }) {
  // Filter out any invalid blob URLs from defaultImages
  const validDefaultImages = defaultImages.filter(img => 
    img && img.trim() !== '' && !img.startsWith('blob:')
  );
  
  const [files, setFiles] = useState(validDefaultImages);
  const [draggedOver, setDraggedOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingCount, setUploadingCount] = useState(0);

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

  async function onDrop(e) {
    e.preventDefault();
    setDraggedOver(false);

    if (!e.dataTransfer?.items) return;

    const droppedFiles = [];
    [...e.dataTransfer.items].forEach((item, idx) => {
      if (item.kind !== 'file') return;
      const file = item.getAsFile();
      if (file) droppedFiles.push(file);
    });

    if (droppedFiles.length > 0) {
      setIsUploading(true);
      setUploadingCount(droppedFiles.length);
      
      const uploadPromises = droppedFiles.map(file => uploadFile(file));
      const uploadedUrls = await Promise.all(uploadPromises);
      const validUrls = uploadedUrls.filter(url => url !== null);
      
      if (validUrls.length > 0) {
        setFiles([...files, ...validUrls]);
      }
      
      setIsUploading(false);
      setUploadingCount(0);
    }
  }

  async function uploadFile(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        return result.url;
      } else {
        console.error('Upload failed:', result.error);
        return null;
      }
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  }

  async function onChange(e) {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles && uploadedFiles.length > 0) {
      setIsUploading(true);
      setUploadingCount(uploadedFiles.length);
      console.log('Uploading files:', uploadedFiles);
      
      const uploadPromises = [];

      for (const file of uploadedFiles) {
        uploadPromises.push(uploadFile(file));
      }

      const uploadedUrls = await Promise.all(uploadPromises);
      const validUrls = uploadedUrls.filter(url => url !== null);
      
      if (validUrls.length > 0) {
        setFiles([...files, ...validUrls]);
      }
      
      setIsUploading(false);
      setUploadingCount(0);
      
      // Clear the input so the same file can be uploaded again if needed
      e.target.value = '';
    }
  }

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const clearAllFiles = () => {
    setFiles([]);
  };

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
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-xs text-primary mt-2">
                Uploading {uploadingCount} file{uploadingCount !== 1 ? 's' : ''}...
              </span>
            </>
          ) : draggedOver ? (
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
            disabled={isUploading}
            className="fixed opacity-0 translate-[9999px]"
            onChange={onChange}
            accept="image/*"
          />
        </label>
        <input type="hidden" value={files.join(',')} name={name} />
      </div>
      
      {/* Image Preview Section */}
      {files.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">
              Uploaded Images ({files.length})
            </span>
            <button
              type="button"
              onClick={clearAllFiles}
              className="text-xs text-red-600 hover:text-red-800 font-medium transition-colors">
              Clear All
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {files.map((f, index) =>
              f.length > 0 && (
                <div key={`uploadimg-${f}-${index}`} className="relative group">
                  <Image
                    className="rounded-md object-cover aspect-square w-full border border-gray-200"
                    src={f}
                    width={200}
                    height={200}
                    alt={`Uploaded Image ${index + 1}`}
                  />
                  
                  {/* Delete Button Overlay */}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600">
                    <XMarkIcon className="size-4" />
                  </button>
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="truncate block">Image {index + 1}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
