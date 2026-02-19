# dal-core-js
This repository contains the JavaScript implementation of the Design Abstraction Language (DAL) core. It exposes APIs for constructing, validating, and analyzing formal design specifications.

## Usage from Package Manager

I have not deployed the library to NPM yet, I am using NPM link locally to develop. See usage below.

## Usage from Local Build

### Build

Install Libraries:
```
npm install
```

Build library:
```
npm run build
```

Or to setup automatic library rebuild when source changes (useful for development):
```
npm run dev
```

Link library:
```
npm link
```

### Use Library Locally

In consuming react application, run:
```
npm link dal-core-js-lib --save
```

You should see the library in node_modules and in package.json.

In react application:
```
import { DAL } from "dal-core-js-lib";
```

Now you can use the DAL specification defined by the library to perform the relevant operations.


# Providing feedback

You can use GitHub issues to [report a bug][bug-report] or [request a feature][feature-req].

[bug-report]: https://github.com/vishalpalaniappan/dal-core-js/issues
[feature-req]: https://github.com/vishalpalaniappan/dal-core-js/issues
