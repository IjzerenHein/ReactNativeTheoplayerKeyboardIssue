Bootstrapped using:

```
npx @react-native-community/cli init ReactNativeTheoplayerKeyboardIssue --template=react-native-tvos@latest
```

Installation

```
yarn install
cd ios && pod install && cd ..
```

Create a file called `licenseKey.json` containing your THEOplayer license:

```json
{
  "ios": "mytvoslicense",
  "android": "myandroidtvlicense"
}
```
