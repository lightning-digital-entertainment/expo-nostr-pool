# expo-nostr-pool

A native nostr client library for Expo applications.

## Why do we need a native module?

React Native is (mostly) single threaded, which means it can only process a single thing at the same time. Because how the nostr protocol is built, clients will often need to receive and handle many events per seconds. This can lead to a blocked main thread and therefore a bad user experience. We can avoid this, by moving the nostr-subscription logic to native code, outside of the JavaScript thread.

## Expo's native module API

Native Modules are nothing new to React Native, however the Expo team has developed their own API to make it easier to plug native modules into Expo applications. They provide a set of methods that allow communication between the JavaScript thread of an app and native modules.

[Module API Reference](https://docs.expo.dev/modules/module-api/)

## The flow

We are going to use a combination of Events and Event Emitters in order to establish communication between the threads.

![flow](/images/flow.jpg)

Please not that this flowchart is a "high-level" concept and probably incomplete.