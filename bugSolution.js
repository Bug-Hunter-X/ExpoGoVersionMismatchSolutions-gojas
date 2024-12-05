The solution involves updating the Expo Go app on your device to a version that's compatible with the project's Expo SDK version.

In this example, the issue was that the project used expo SDK 48 but the user had an older Expo Go client.

To update the Expo Go client:

1. Uninstall the old Expo Go client from your phone or emulator.
2. Open the Expo Go app store listing and download the latest version of Expo Go. 
3. Retry running your project. The development server and the app on your device should work correctly now.