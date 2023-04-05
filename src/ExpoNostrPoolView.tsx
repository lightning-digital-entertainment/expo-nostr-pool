import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNostrPoolViewProps } from './ExpoNostrPool.types';

const NativeView: React.ComponentType<ExpoNostrPoolViewProps> =
  requireNativeViewManager('ExpoNostrPool');

export default function ExpoNostrPoolView(props: ExpoNostrPoolViewProps) {
  return <NativeView {...props} />;
}
