import * as React from 'react';

import { ExpoNostrPoolViewProps } from './ExpoNostrPool.types';

export default function ExpoNostrPoolView(props: ExpoNostrPoolViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
