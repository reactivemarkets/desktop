# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0](https://github.com/markmcdowell/desktop/compare/v0.10.0...v0.11.0) (2020-06-18)


### Bug Fixes

* **core:** removing strict from command line ([cc11a21](https://github.com/markmcdowell/desktop/commit/cc11a218a8e16b33370ebd91e86723c86169900b))


### Features

* **desktop:** adding windows install details ([322b206](https://github.com/markmcdowell/desktop/commit/322b206a413a46ef3d23e73bcf4a03f1ce899984))
* **desktop:** loading defaults on start ([286002a](https://github.com/markmcdowell/desktop/commit/286002a05e450210b449d9e1ee94d82733e2f884))





# [0.10.0](https://github.com/markmcdowell/desktop/compare/v0.9.0...v0.10.0) (2020-06-17)


### Features

* **core:** running start command on open-url ([bd64126](https://github.com/markmcdowell/desktop/commit/bd641261eb810cbe7612a399a17e4662b083d012))





# [0.9.0](https://github.com/markmcdowell/desktop/compare/v0.8.0...v0.9.0) (2020-06-17)


### Bug Fixes

* **core:** catching any errors loading configuration files ([d444ce3](https://github.com/markmcdowell/desktop/commit/d444ce3e0376bb33ea911b03f948c1c7dc64f9b1))


### Features

* **api:** adding support for certificates and origin ([91f1bf7](https://github.com/markmcdowell/desktop/commit/91f1bf72ef08c51e2ad4d9ec53fb1eedeee8e888))
* **core:** adding describe command ([e0503c3](https://github.com/markmcdowell/desktop/commit/e0503c3e094eff0631bb1a79dc7c6799b745e90d))
* **core:** adding hide and how to command line ([0c03931](https://github.com/markmcdowell/desktop/commit/0c03931a8ac1c1b4f8f994308bf8ed10535fdce7))
* **core:** adding quiet option to ps command ([1af8f1c](https://github.com/markmcdowell/desktop/commit/1af8f1cef98ed23b489276c7d3ddbe722d4bbfca))
* **core:** configuration generator now takes an object ([607878e](https://github.com/markmcdowell/desktop/commit/607878e65742a3a9ae6fdcd4fa099973e2da5d09))
* **core:** generating unique random names for configuration ([bac7b25](https://github.com/markmcdowell/desktop/commit/bac7b25bae993aad036ff2e2a6690c709e0ab14a))
* **core:** implementing router service ([cd72f99](https://github.com/markmcdowell/desktop/commit/cd72f993268e224bcf92774922aa6920833c9795))
* **core:** launching applications that come in through open-url ([1cb4f8a](https://github.com/markmcdowell/desktop/commit/1cb4f8a1e7b6e945718fbfcbef9d3a3cde51ce93))
* **core:** registering configuration sent from a second instance ([20acc6b](https://github.com/markmcdowell/desktop/commit/20acc6b1d1ab5f578c1c99c1849f2d36ba0a4f88))
* **core:** updating ipc connect id ([d92c674](https://github.com/markmcdowell/desktop/commit/d92c6740664ca8056f6a6c5bbd117c4a824e6fa2))
* **core:** using com.reactivemarkets. for the ipc appspace ([044af00](https://github.com/markmcdowell/desktop/commit/044af0031fe946867896bfe0d9a2676a26f1e5ba))





# [0.8.0](https://github.com/markmcdowell/desktop/compare/v0.7.0...v0.8.0) (2020-06-15)


### Bug Fixes

* **desktop:** correcting darwin package ([7875084](https://github.com/markmcdowell/desktop/commit/78750843985da04d9184f5aec859bf6319035c68))
* adding dev builds back ([5772563](https://github.com/markmcdowell/desktop/commit/5772563a31ddcec81bb6c2699193c4ec5f5e9ba3))
* **core:** colorizing logger ([379c786](https://github.com/markmcdowell/desktop/commit/379c78640fceba28814dc5fac25e7ebc1b63fd00))
* **core:** fixing global shortcuts ([002e0c2](https://github.com/markmcdowell/desktop/commit/002e0c211293d4da815719311d4172e5740ae998))
* **core:** removing devtools from view menu ([bf1d8aa](https://github.com/markmcdowell/desktop/commit/bf1d8aa9ad8c87a7274101673affb9cb4a158291))


### Features

* **core:** adding partition to application web preferences ([b84bdce](https://github.com/markmcdowell/desktop/commit/b84bdce794c9bedb2a8e52edf9eb5049a4c8b685))
* **core:** adding status to configuration ([2522be8](https://github.com/markmcdowell/desktop/commit/2522be8b3ff3448b9ffed63d6d0afb8592345fa9))
* **core:** clear command now supports other sessions ([31159c9](https://github.com/markmcdowell/desktop/commit/31159c9fd58b1dafd0cec3b030a1f704ac3dd603))
* **core:** setting app user model id ([8d4b897](https://github.com/markmcdowell/desktop/commit/8d4b897b857fe5f5989583d6a2f76c899af68faa))





# [0.7.0](https://github.com/markmcdowell/desktop/compare/v0.6.1...v0.7.0) (2020-06-10)


### Bug Fixes

* **dock:** adding tooltip to search button ([ea5b64a](https://github.com/markmcdowell/desktop/commit/ea5b64a5a2c7084e3dcca12d22064a9e02e5b721))


### Features

* **core:** adding affinity and devtools to app configuration ([33e3232](https://github.com/markmcdowell/desktop/commit/33e3232b098148d3559c335ead1ba97f7f6eaead))
* **core:** adding content protection to applications ([827dc59](https://github.com/markmcdowell/desktop/commit/827dc59c285cb92bf16ec61f5783b097fe065561))
* **core:** adding events for windows ([47acefd](https://github.com/markmcdowell/desktop/commit/47acefd9d29b7663001df790c0b6513f41854ceb))
* **core:** adding storage provisioners ([1fcf06e](https://github.com/markmcdowell/desktop/commit/1fcf06e8460a99d6ad91686d0d544f09046486ac))
* **core:** capturing any unhandled exceptions and promises ([13e8419](https://github.com/markmcdowell/desktop/commit/13e84190a6e54abf585d015210557aaebe6ba196))
* **core:** restricting open external to https and mailto ([af69d70](https://github.com/markmcdowell/desktop/commit/af69d70f626e1198b17df2d589af45e6704346b8))
* **dock:** adding resizer and focus stores ([6e63756](https://github.com/markmcdowell/desktop/commit/6e63756adeec33eed0a92cd3d7e61c90886e53ec))
* **dock:** adding search to dock ([c6d6d39](https://github.com/markmcdowell/desktop/commit/c6d6d390a7348e6c4be15ce40dc1ec28d8bb843b))
* **dock:** expanding dock after 500ms delay ([6fdb34a](https://github.com/markmcdowell/desktop/commit/6fdb34a14311ddb2541736cd3e2c0be1ce3589b8))
* **dock:** selecting first search result on enter ([ec59594](https://github.com/markmcdowell/desktop/commit/ec5959431251c0b9b8c45344c534d994f97838dc))





## [0.6.1](https://github.com/markmcdowell/desktop/compare/v0.6.0...v0.6.1) (2020-06-04)


### Bug Fixes

* **sdk:** adding prepublish script ([ddbd027](https://github.com/markmcdowell/desktop/commit/ddbd027663efa01dd3836156624e2785c1169c2c))





# [0.6.0](https://github.com/markmcdowell/desktop/compare/v0.5.2...v0.6.0) (2020-06-04)


### Bug Fixes

* **core:** fixing tests ([acfc12f](https://github.com/markmcdowell/desktop/commit/acfc12ff248be986ff884b863d8d413a0028474d))
* **core:** handling squirrel events ([ceaef4e](https://github.com/markmcdowell/desktop/commit/ceaef4eafb917cd312efa69c43cd90d4460c1952))


### Features

* **dock:** adding dock ([c428e19](https://github.com/markmcdowell/desktop/commit/c428e19f0d0a5830deb14d7e1214d470bda21da0))





## [0.5.2](https://github.com/markmcdowell/desktop/compare/v0.5.1...v0.5.2) (2020-05-29)


### Bug Fixes

* **desktop:** following symlinks when zipping ([0502443](https://github.com/markmcdowell/desktop/commit/05024439531d4922ae95b082e726cdd67df35a07))





## [0.5.1](https://github.com/markmcdowell/desktop/compare/v0.5.0...v0.5.1) (2020-05-28)


### Bug Fixes

* **core:** changing logging for cached config to verbose ([2bf3231](https://github.com/markmcdowell/desktop/commit/2bf3231bdb954fd4a968c512a3ef371b8929177c))
* **core:** exporting command handlers directly ([f778c9d](https://github.com/markmcdowell/desktop/commit/f778c9d6109c8bdb34f9be77262b4f010a09b493))
* **sdk:** publish config should be public ([016d76e](https://github.com/markmcdowell/desktop/commit/016d76e7213067199eb57ebf94e3b4fb1af2d8db))





# [0.5.0](https://github.com/markmcdowell/desktop/compare/v0.4.11...v0.5.0) (2020-05-04)


### Bug Fixes

* **core:** improving console logging ([221de15](https://github.com/markmcdowell/desktop/commit/221de1505a8e3137da0e7e64540b59df8569d22c))


### Features

* **api:** replacing socket.io with express-ws ([0bc0816](https://github.com/markmcdowell/desktop/commit/0bc081613143391bef96d2333ca0bc0262072e24))
* **core:** adding global shortcut api ([98b6d9c](https://github.com/markmcdowell/desktop/commit/98b6d9c4e58e10e46d2fe8d7f41b3e528e554407))
* **core:** adding logger api ([84fe104](https://github.com/markmcdowell/desktop/commit/84fe104d2d4d13b55f7ee520d8fb18bd78287ba4))
* **core:** adding window api ([3d7611a](https://github.com/markmcdowell/desktop/commit/3d7611a8a41cb92f5212bbef8d74556c93a40e89))
* **core:** filling out window api ([9ef5622](https://github.com/markmcdowell/desktop/commit/9ef5622c5c9ca2306e906730102a5204b4948172))
* **sdk:** adding javascript sdk ([129221c](https://github.com/markmcdowell/desktop/commit/129221c7acbbbb7b933d8beeeeb2e5587b251e9a))





## [0.4.11](https://github.com/markmcdowell/desktop/compare/v0.4.10...v0.4.11) (2020-04-22)


### Bug Fixes

* **core:** app.getName() is deprecated ([f0b396f](https://github.com/markmcdowell/desktop/commit/f0b396ff674f24812e6d5cc6b203a728f8a2063a))
* **desktop:** window specific package was missing installer ([39e485f](https://github.com/markmcdowell/desktop/commit/39e485f882861e34d99c71627370b5be10002648))





## [0.4.10](https://github.com/markmcdowell/desktop/compare/v0.4.9...v0.4.10) (2020-04-22)


### Bug Fixes

* **desktop:** windows doesn't have a zip command ([23fe73f](https://github.com/markmcdowell/desktop/commit/23fe73f86266bb823414fb2d988c4be4a0782338))





## [0.4.9](https://github.com/markmcdowell/desktop/compare/v0.4.8...v0.4.9) (2020-04-22)


### Bug Fixes

* **desktop:** adding proxy support to initial download ([6d93122](https://github.com/markmcdowell/desktop/commit/6d931225d1f5f7d6523164aa08560f038b412627))
* **desktop:** download.js was missing from the package ([9f6abce](https://github.com/markmcdowell/desktop/commit/9f6abce55d29dc5b2098661aafd3492c5c3d7f06))
* **desktop:** moving from request to node-fetch ([541e1e5](https://github.com/markmcdowell/desktop/commit/541e1e50f4d7399728159a4aeeeb6e5a0c669f7c))





## [0.4.8](https://github.com/markmcdowell/desktop/compare/v0.4.7...v0.4.8) (2020-04-22)


### Bug Fixes

* **desktop:** adding cross-var for npm variables ([e2d1bad](https://github.com/markmcdowell/desktop/commit/e2d1bad41bde3f9818ab5216060db2358b6e5a63))





## [0.4.7](https://github.com/markmcdowell/desktop/compare/v0.4.6...v0.4.7) (2020-04-22)


### Bug Fixes

* **desktop:** ensuring support for older node versions ([df513a9](https://github.com/markmcdowell/desktop/commit/df513a906d23bd09f98f843144e43c4f8f514675))





## [0.4.6](https://github.com/markmcdowell/desktop/compare/v0.4.5...v0.4.6) (2020-04-21)


### Bug Fixes

* **desktop:** using cd instead of pushd ([be91421](https://github.com/markmcdowell/desktop/commit/be914212446b58c1becc3311a7356803cd8a5772))





## [0.4.5](https://github.com/markmcdowell/desktop/compare/v0.4.4...v0.4.5) (2020-04-21)


### Bug Fixes

* **core:** logged whether the app is packaged ([7268b52](https://github.com/markmcdowell/desktop/commit/7268b52b8aa07acc31aef806a8a52785d1631164))





## [0.4.4](https://github.com/markmcdowell/desktop/compare/v0.4.3...v0.4.4) (2020-04-21)


### Bug Fixes

* **core:** correcting repo url ([8503431](https://github.com/markmcdowell/desktop/commit/8503431826472e37edf1f5d1af172cb8a0829843))
* **core:** fixing start command ([4f6a9f2](https://github.com/markmcdowell/desktop/commit/4f6a9f2a28d2c9ff004c18074e6f074e77835baf))
* **core:** fixing uuid import ([b5d20d2](https://github.com/markmcdowell/desktop/commit/b5d20d2ce3f66de0d1c16d5876dcdd929a1d89c2))
* **core:** removing coverage folder on clean ([4d11ebf](https://github.com/markmcdowell/desktop/commit/4d11ebf8d15f5d39a0a328096e4e5c36ee689cc4))
* **desktop:** adding download progress ([99eddf2](https://github.com/markmcdowell/desktop/commit/99eddf2378c8451d5865849e1e27496204cb3426))





## [0.4.3](https://github.com/markmcdowell/desktop/compare/v0.4.2...v0.4.3) (2019-09-12)


### Bug Fixes

* correcting npm packaging ([d058563](https://github.com/markmcdowell/desktop/commit/d058563))





## 0.4.2 (2019-09-12)


### Bug Fixes

* **deps:** removing rename-cli as a dependency has a security issue ([99d5b28](https://github.com/markmcdowell/desktop/commit/99d5b28))
* **logging:** electron requires the app logs path to be set ([ec4751f](https://github.com/markmcdowell/desktop/commit/ec4751f))



## 0.4.1 (2019-05-18)



# 0.3.0 (2019-03-14)



## 0.1.3 (2019-03-14)
