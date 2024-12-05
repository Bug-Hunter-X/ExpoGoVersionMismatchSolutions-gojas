# Expo CLI: Expo Go Version Mismatch

This repository demonstrates a common error encountered when using the Expo CLI, specifically related to version mismatches between the Expo Go app and the project's Expo SDK version.  The error typically prevents the development server from starting or causes build failures when trying to run the app on a device.

The `bug.js` file showcases a project setup that's likely to trigger this issue. The `bugSolution.js` file provides the solution and demonstrates how to resolve the mismatch.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Try to run the app with `expo start` (the `bug.js` version will likely fail).
4. Run the corrected version with `expo start` after applying the solution in `bugSolution.js`

## Solution

The primary solution involves updating the Expo Go app to match (or surpass) the project's Expo SDK version.  This ensures compatibility between the client and the development server. The file `bugSolution.js` illustrates how this would normally be handled in a typical setup.