import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = (value) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : '$--.--'}
      </h2>
      <p>{type.description}</p>
      <input
        ref={inputComponent}
        type={type.name}
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
