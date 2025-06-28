'use client';

import { CheckIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

/** @param {import("react").InputHTMLAttributes<HTMLInputElement>} props  */
export default function CheckButton(props) {
  const [state, setState] = useState(props.checked ?? false);

  return (
    <>
      <button
        className="rounded-md border border-secondary-neutral-light aspect-square flex h-6 bg-light-accent cursor-pointer"
        onClick={() => setState(!state)}>
        {state && <CheckIcon className="size-4 text-primary m-auto" />}
      </button>
      <input type="hidden" {...props} value={state} />
    </>
  );
}
