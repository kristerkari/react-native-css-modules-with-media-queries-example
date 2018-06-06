# React Native CSS modules with CSS Media Queries

![Platform - Android, iOS and Web](https://img.shields.io/badge/platform-Android%20%7C%20iOS%20%7C%20Web-blue.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

An example app to show how CSS Media Queries work in React Native.

**Quick links:** **[Features](#example-app-features)** • **[Screenshots](#screenshots)** • **[Try it](#try-it)** • **[Documentation](https://github.com/kristerkari/react-native-css-modules#documentation)**

---

<img src="screenshots/react-native-css-media-queries.gif" width="600">

This example app re-implements ["Responsive Full Width Tabs" demo](https://tympanus.net/Blueprints/FullWidthTabs/) from Tympanus Codrops website in React Native.

The example app should look and work exactly the same way in both browser and React Native.

To see code examples, have a look at [styles.css](/src/styles.css#L222) and [App.js](/src/App.js) inside [src](/src) folder.

## Example App features

#### React Native and Web

* Uses the same CSS Media Queries for responsive scaling in both React Native and Web.
* Allows you to use both `className={myStyles.myClass}` and `style={{ color: "red" }}` properties on React Native elements such as `<Text>` or `<View>`.
* CSS Hot reloading.
* Uses [Sass](src/Buttons.scss) and [CSS](src/ProfileCard.css) for styles, but you can choose which one to use.
* [Uses custom stylelint config for React Native CSS modules](https://github.com/kristerkari/stylelint-config-react-native-css-modules)

#### React Native specific

* Uses [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)
* You can use platform specific file extensions, e.g. `styles.ios.scss`, `styles.android.scss`, `styles.native.scss`.

#### Web specific

* Uses [Webpack](https://webpack.js.org/) + [CSS modules](https://github.com/css-modules/css-modules).
* Uses [React Native for Web](https://github.com/necolas/react-native-web) to make most React Native elements work in the browser.

## Try it

### Step 1: Install depencies to run React Native

Make sure that you have `react-native-cli` installed (`npm install -g react-native-cli`) and [XCode](https://developer.apple.com/xcode/) (for iOS development) / [Android Studio](https://developer.android.com/studio/index.html) (for Android development) installed and working.

* Go to "Building Projects with Native Code" tab and follow the guide: https://facebook.github.io/react-native/docs/getting-started.html

### Step 2: Clone the repo and move to project

```sh
git clone git@github.com:kristerkari/react-native-css-modules-with-media-queries-example.git
cd react-native-css-modules-with-media-queries-example
```

### Step 3: Install example app's dependencies

```sh
npm install
```

### Step 4: Run React Native packager

You can open a new terminal tab to run React Native's packager.

```sh
npm start
```

### Step 5: Run app on Android, iOS or Web

First make sure that your Android emulator or iOS simulator is working, then:

```sh
npm run ios
```

or

```sh
npm run android
```

or

```sh
npm run web
```

Web app can be accessed by opening `http://localhost:8080` in a browser.

---

...or if you use Yarn:

```sh
yarn ios
```

```sh
yarn android
```

```sh
yarn web
```

## Screenshots

### iPhone 8

**Left: iOS Safari browser**<br>
**Right: React Native**

<img src="screenshots/iphone-browser-portrait.png" width="50%"><img src="screenshots/iphone-native-portrait.png" width="50%">
<img src="screenshots/iphone-browser-landscape.png" width="50%"><img src="screenshots/iphone-native-landscape.png" width="50%">

### iPad 5G

**Left: iOS Safari browser**<br>
**Right: React Native**

<img src="screenshots/ipad-browser-portrait.png" width="50%"><img src="screenshots/ipad-native-portrait.png" width="50%">
<img src="screenshots/ipad-browser-landscape.png" width="50%"><img src="screenshots/ipad-native-landscape.png" width="50%">

### Android Nexus 5X

**Left: Android Chrome browser**<br>
**Right: React Native**

<img src="screenshots/android-browser-portrait.png" width="50%"><img src="screenshots/android-native-portrait.png" width="50%">
<img src="screenshots/android-browser-landscape.png" width="50%"><img src="screenshots/android-native-landscape.png" width="50%">
