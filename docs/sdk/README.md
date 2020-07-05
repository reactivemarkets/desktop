# Introduction

The [Desktop SDK](https://www.npmjs.com/package/@reactivemarkets/desktop-sdk) is a JavaScript SDK to access the underlying Desktop API making it simple to integrate.

## Installation

```bash
npm i @reactivemarkets/desktop-sdk
```

## Usage

You can check if your code is running in the Desktop host by using the [`isHostedInDesktop`](/sdk/desktop/#ishostedindesktop) property.

```ts
import { desktop, window } from "@reactivemarkets/desktop-sdk";

if (desktop.isHostedInDesktop) {
    window.current().setBounds({ height: 400 });
};
```

## Examples

You can find various examples of sdk usage and configuration at <https://github.com/desktop-examples>.
