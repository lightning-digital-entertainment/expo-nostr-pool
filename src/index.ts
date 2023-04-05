import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoNostrPool.web.ts
// and on native platforms to ExpoNostrPool.ts
import ExpoNostrPoolModule from './ExpoNostrPoolModule';
import ExpoNostrPoolView from './ExpoNostrPoolView';
import { ChangeEventPayload, ExpoNostrPoolViewProps } from './ExpoNostrPool.types';

// Get the native constant value.
export const PI = ExpoNostrPoolModule.PI;

export function hello(): string {
  return ExpoNostrPoolModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoNostrPoolModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoNostrPoolModule ?? NativeModulesProxy.ExpoNostrPool);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoNostrPoolView, ExpoNostrPoolViewProps, ChangeEventPayload };
