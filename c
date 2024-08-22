[1mdiff --git a/.eslintrc.cjs b/.eslintrc.cjs[m
[1mnew file mode 100644[m
[1mindex 0000000..d6c9537[m
[1m--- /dev/null[m
[1m+++ b/.eslintrc.cjs[m
[36m@@ -0,0 +1,18 @@[m
[32m+[m[32mmodule.exports = {[m
[32m+[m[32m  root: true,[m
[32m+[m[32m  env: { browser: true, es2020: true },[m
[32m+[m[32m  extends: [[m
[32m+[m[32m    'eslint:recommended',[m
[32m+[m[32m    'plugin:@typescript-eslint/recommended',[m
[32m+[m[32m    'plugin:react-hooks/recommended',[m
[32m+[m[32m  ],[m
[32m+[m[32m  ignorePatterns: ['dist', '.eslintrc.cjs'],[m
[32m+[m[32m  parser: '@typescript-eslint/parser',[m
[32m+[m[32m  plugins: ['react-refresh'],[m
[32m+[m[32m  rules: {[m
[32m+[m[32m    'react-refresh/only-export-components': [[m
[32m+[m[32m      'warn',[m
[32m+[m[32m      { allowConstantExport: true },[m
[32m+[m[32m    ],[m
[32m+[m[32m  },[m
[32m+[m[32m}[m
[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..a547bf3[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32m# Logs[m
[32m+[m[32mlogs[m
[32m+[m[32m*.log[m
[32m+[m[32mnpm-debug.log*[m
[32m+[m[32myarn-debug.log*[m
[32m+[m[32myarn-error.log*[m
[32m+[m[32mpnpm-debug.log*[m
[32m+[m[32mlerna-debug.log*[m
[32m+[m
[32m+[m[32mnode_modules[m
[32m+[m[32mdist[m
[32m+[m[32mdist-ssr[m
[32m+[m[32m*.local[m
[32m+[m
[32m+[m[32m# Editor directories and files[m
[32m+[m[32m.vscode/*[m
[32m+[m[32m!.vscode/extensions.json[m
[32m+[m[32m.idea[m
[32m+[m[32m.DS_Store[m
[32m+[m[32m*.suo[m
[32m+[m[32m*.ntvs*[m
[32m+[m[32m*.njsproj[m
[32m+[m[32m*.sln[m
[32m+[m[32m*.sw?[m
[1mdiff --git a/Interactive-Comments b/Interactive-Comments[m
[1mnew file mode 160000[m
[1mindex 0000000..d8a9dc3[m
[1m--- /dev/null[m
[1m+++ b/Interactive-Comments[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mSubproject commit d8a9dc38c4b52ca8798746014e76165978d4d50f[m
[1mdiff --git a/README.md b/README.md[m
[1mindex 15abd35..0d6babe 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -1 +1,30 @@[m
[31m-# Interactive-Comments[m
\ No newline at end of file[m
[32m+[m[32m# React + TypeScript + Vite[m
[32m+[m
[32m+[m[32mThis template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.[m
[32m+[m
[32m+[m[32mCurrently, two official plugins are available:[m
[32m+[m
[32m+[m[32m- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh[m
[32m+[m[32m- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh[m
[32m+[m
[32m+[m[32m## Expanding the ESLint configuration[m
[32m+[m
[32m+[m[32mIf you are developing a production application, we recommend updating the configuration to enable type aware lint rules:[m
[32m+[m
[32m+[m[32m- Configure the top-level `parserOptions` property like this:[m
[32m+[m
[32m+[m[32m```js[m
[32m+[m[32mexport default {[m
[32m+[m[32m  // other rules...[m
[32m+[m[32m  parserOptions: {[m
[32m+[m[32m    ecmaVersion: 'latest',[m
[32m+[m[32m    sourceType: 'module',[m
[32m+[m[32m    project: ['./tsconfig.json', './tsconfig.node.json'],[m
[32m+[m[32m    tsconfigRootDir: __dirname,[m
[32m+[m[32m  },[m
[32m+[m[32m}[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32m- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`[m
[32m+[m[32m- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`[m
[32m+[m[32m- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list[m
[1mdiff --git a/index.html b/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..e4b78ea[m
[1m--- /dev/null[m
[1m+++ b/index.html[m
[36m@@ -0,0 +1,13 @@[m
[32m+[m[32m<!doctype html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m  <head>[m
[32m+[m[32m    <meta charset="UTF-8" />[m
[32m+[m[32m    <link rel="icon" type="image/svg+xml" href="/vite.svg" />[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[32m+[m[32m    <title>Vite + React + TS</title>[m
[32m+[m[32m  </head>[m
[32m+[m[32m  <body>[m
[32m+[m[32m    <div id="root"></div>[m
[32m+[m[32m    <script type="module" src="/src/main.tsx"></script>[m
[32m+[m[32m  </body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..640d31c[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,4229 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "interactive-comments",[m
[32m+[m[32m  "version": "0.0.0",[m
[32m+[m[32m  "lockfileVersion": 3,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "interactive-comments",[m
[32m+[m[32m      "version": "0.0.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@tanstack/react-query": "^5.51.16",[m
[32m+[m[32m        "react": "^18.3.1",[m
[32m+[m[32m        "react-dom": "^18.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "@types/react": "^18.3.3",[m
[32m+[m[32m        "@types/react-dom": "^18.3.0",[m
[32m+[m[32m        "@typescript-eslint/eslint-plugin": "^7.13.1",[m
[32m+[m[32m        "@typescript-eslint/parser": "^7.13.1",[m
[32m+[m[32m        "@vitejs/plugin-react": "^4.3.1",[m
[32m+[m[32m        "autoprefixer": "^10.4.19",[m
[32m+[m[32m        "eslint": "^8.57.0",[m
[32m+[m[32m        "eslint-plugin-react-hooks": "^4.6.2",[m
[32m+[m[32m        "eslint-plugin-react-refresh": "^0.4.7",[m
[32m+[m[32m        "postcss": "^8.4.40",[m
[32m+[m[32m        "postcss-import": "^16.1.0",[m
[32m+[m[32m        "tailwindcss": "^3.4.7",[m
[32m+[m[32m        "typescript": "^5.2.2",[m
[32m+[m[32m        "vite": "^5.3.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@alloc/quick-lru": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@ampproject/remapping": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.5",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.24"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/code-frame": {[m
[32m+[m[32m      "version": "7.24.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.24.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-BcYH1CVJBO9tvyIZ2jVeXgSIMvGZ2FDRvDdOIVQyuklNKSsx+eppDEBq/g47Ayw+RqNFE+URvOShmf+f/qwAlA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/highlight": "^7.24.7",[m
[32m+[m[32m        "picocolors": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/compat-data": {[m
[32m+[m[32m      "version": "7.25.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.25.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-bYcppcpKBvX4znYaPEeFau03bp89ShqNMLs+rmdptMw+heSZh9+z84d2YG+K7cYLbWwzdjtDoW/uqZmPjulClQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core": {[m
[32m+[m[32m      "version": "7.25.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.25.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-BBt3opiCOxUr9euZ5/ro/Xv8/V7yJ5bjYMqG/C1YAo8MIKAnumZalCN+msbci3Pigy4lIQfPUpfMM27HMGaYEA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@ampproject/remapping": "^2.2.0",[m
[32m+[m[32m        "@babel/code-frame": "^7.24.7",[m
[32m+[m[32m        "@babel/generator": "^7.25.0",[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.25.2",[m
[32m+[m[32m        "@babel/helper-module-transforms": "^7.25.2",[m
[32m+[m[32m        "@babel/helpers": "^7.25.0",[m
[32m+[m[32m        "@babel/parser": "^7.25.0",[m
[32m+[m[32m        "@babel/template": "^7.25.0",[m
[32m+[m[32m        "@babel/traverse": "^7.25.2",[m
[32m+[m[32m        "@babel/types": "^7.25.2",[m
[32m+[m[32m        "convert-source-map": "^2.0.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "gensync": "^1.0.0-beta.2",[m
[32m+[m[32m        "json5": "^2.2.3",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/babel"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core/node_modules/semver": {[m
[32m+[m[32m      "version": "6.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/generator": {[m
[32m+[m[32m      "version": "7.25.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.25.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-3LEEcj3PVW8pW2R1SR1M89g/qrYk/m/mB/tLqn7dn4sbBUQyTqnlod+II2U4dqiGtUmkcnAmkMDralTFZttRiw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.25.0",[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.5",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.25",[m
[32m+[m[32m        "jsesc": "^2.5.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets": {[m
[32m+[m[32m      "version": "7.25.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-U2U5LsSaZ7TAt3cfaymQ8WHh0pxvdHoEk6HVpaexxixjyEquMh0L0YNJNM6CTGKMXV1iksi0iZkGw4AcFkPaaw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/compat-data": "^7.25.2",[m
[32m+[m[32m        "@babel/helper-validator-option": "^7.24.8",[m
[32m+[m[32m        "browserslist": "^4.23.1",[m
[32m+[m[32m        "lru-cache": "^5.1.1",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {[m
[32m+[m[32m      "version": "6.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-imports": {[m
[32m+[m[32m      "version": "7.24.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.24.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-8AyH3C+74cgCVVXow/myrynrAGv+nTVg5vKu2nZph9x7RcRwzmh0VFallJuFTZ9mx6u4eSdXZfcOzSqTUm0HCA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/traverse": "^7.24.7",[m
[32m+[m[32m        "@babel/types": "^7.24.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-transforms": {[m
[32m+[m[32m      "version": "7.25.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.25.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-BjyRAbix6j/wv83ftcVJmBt72QtHI56C7JXZoG2xATiLpmoC7dpd8WnkikExHDVPpi/3qCmO6WY1EaXOluiecQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-module-imports": "^7.24.7",[m
[32m+[m[32m        "@babel/helper-simple-access": "^7.24.7",[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.24.7",[m
[32m+[m[32m        "@babel/traverse": "^7.25.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-plugin-utils": {[m
[32m+[m[32m      "version": "7.24.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.24.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-FFWx5142D8h2Mgr/iPVGH5G7w6jDn4jUSpZTyDnQO0Yn7Ks2Kuz6Pci8H6MPCoUJegd/UZQ3tAvfLCxQSnWWwg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-simple-access": {[m
[32m+[m[32m      "version": "7.24.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.24.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-zBAIvbCMh5Ts+b86r/CjU+4XGYIs+R1j951gxI3KmmxBMhCg4oQMsv6ZXQ64XOm/cvzfU1FmoCyt6+owc5QMYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/traverse": "^7.24.7",[m
[32m+[m[32m        "@babel/types": "^7.24.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-string-parser": {[m
[32m+[m[32m      "version": "7.24.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.24.8.tgz",[m
[32m+[m[