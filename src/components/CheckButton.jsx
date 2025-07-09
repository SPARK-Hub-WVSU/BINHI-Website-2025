'use client';

import { CheckIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

/** @param {import("react").InputHTMLAttributes<HTMLInputElement>} props  */
export default function CheckButton(props) {
  const [state, setState] = useState(props.checked ?? false);

  return (
    <label className="rounded-md border border-secondary-neutral-light aspect-square flex h-6 cursor-pointer select-none focus-within:outline" tabIndex={-1}>
      {state && <CheckIcon className="size-4 text-primary m-auto" />}
      <input
        type="checkbox"
        className="opacity-0 fixed translate-[9999px]"
        {...props}
        value={state}
        onChange={(e) => setState(e.target.checked)}
        tabIndex={0}
      />
    </label>
  );
}
