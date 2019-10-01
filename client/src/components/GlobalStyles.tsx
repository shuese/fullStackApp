import { css, Global } from '@emotion/core';
import React from 'react';
import gingham from '../assets/font/Gingham.woff2';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: gingham;
          src: url(${gingham}) format('woff2-variations'),
            url(${gingham}) format('woff2'); /* for older browsers */
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        ::before,
        ::after {
          text-decoration: inherit;
          vertical-align: inherit;
        }

        html {
          cursor: default;
          line-height: 1.5;
          -moz-tab-size: 4;
          height: 100%;
          tab-size: 4;
          -webkit-tap-highlight-color: transparent;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          word-break: break-word;
          font-family: gingham, system-ui,
            /* macOS 10.11-10.12 
            */ -apple-system,
            /* Windows 6+ */ 'Segoe UI', /* Android 4+ */ 'Roboto',
            /* Ubuntu 10.10+ */ 'Ubuntu', /* Gnome 3+ */ 'Cantarell',
            /* KDE Plasma 5+ */ 'Noto Sans', /* fallback */ sans-serif,
            /* macOS emoji */ 'Apple Color Emoji',
            /* Windows emoji */ 'Segoe UI Emoji',
            /* Windows emoji */ 'Segoe UI Symbol',
            /* Linux emoji */ 'Noto Color Emoji';
          font-variation-settings: 'wght' 1, 'wdth' 200, 'ital' 1, 'opsz' 100;
        }

        body {
          margin: 0;
          height: 100%;
        }

        dl dl,
        dl ol,
        dl ul,
        ol dl,
        ul dl {
          margin: 0;
        }

        ol ol,
        ol ul,
        ul ol,
        ul ul {
          margin: 0;
        }

        hr {
          height: 0;
          overflow: visible;
        }

        main {
          display: block;
        }

        nav ol,
        nav ul {
          list-style: none;
          padding: 0;
        }

        pre {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        a {
          background-color: transparent;
        }

        abbr[title] {
          text-decoration: underline;
          text-decoration: underline dotted;
        }

        abbr[title] {
          text-decoration: underline;
          text-decoration: underline dotted;
        }

        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        small {
          font-size: 80%;
        }

        audio,
        canvas,
        iframe,
        img,
        svg,
        video {
          vertical-align: middle;
        }

        audio,
        video {
          display: inline-block;
        }

        audio:not([controls]) {
          display: none;
          height: 0;
        }

        img {
          border-style: none;
        }

        svg:not([fill]) {
          fill: currentColor;
        }

        svg:not(:root) {
          overflow: hidden;
        }
        table {
          border-collapse: collapse;
        }

        button,
        input,
        select {
          margin: 0;
        }

        button {
          overflow: visible;
          text-transform: none;
        }

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        fieldset {
          border: 1px solid #a0a0a0;
          padding: 0.35em 0.75em 0.625em;
        }

        input {
          overflow: visible;
        }

        legend {
          color: inherit;
          display: table;
          max-width: 100%;
          white-space: normal;
        }

        select {
          text-transform: none;
        }

        textarea {
          margin: 0;
          overflow: auto;
          resize: vertical;
        }

        [type='checkbox'],
        [type='radio'] {
          padding: 0;
        }

        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }

        ::-webkit-input-placeholder {
          color: inherit;
          opacity: 0.54;
        }

        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }

        ::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        :-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        :-moz-ui-invalid {
          box-shadow: none;
        }

        details {
          display: block;
        }

        dialog {
          background-color: white;
          border: solid;
          color: black;
          display: block;
          height: -moz-fit-content;
          height: -webkit-fit-content;
          height: fit-content;
          left: 0;
          margin: auto;
          padding: 1em;
          position: absolute;
          right: 0;
          width: -moz-fit-content;
          width: -webkit-fit-content;
          width: fit-content;
        }

        dialog:not([open]) {
          display: none;
        }

        summary {
          display: list-item;
        }

        canvas {
          display: inline-block;
        }

        template {
          display: none;
        }

        a,
        area,
        button,
        input,
        label,
        select,
        summary,
        textarea,
        [tabindex] {
          -ms-touch-action: manipulation;
          touch-action: manipulation;
        }

        [hidden] {
          display: none;
        }

        [aria-busy='true'] {
          cursor: progress;
        }

        [aria-controls] {
          cursor: pointer;
        }

        [aria-disabled='true'],
        [disabled] {
          cursor: not-allowed;
        }

        [aria-hidden='false'][hidden] {
          display: initial;
        }

        [aria-hidden='false'][hidden]:not(:focus) {
          clip: rect(0, 0, 0, 0);
          position: absolute;
        }
        code,
        kbd,
        samp,
        pre {
          font-family: gingham, /* macOS 10.10+ */ 'Menlo',
            /* Windows 6+ */ 'Consolas', /* Android 4+ */ 'Roboto Mono',
            /* Ubuntu 10.10+ */ 'Ubuntu Monospace',
            /* KDE Plasma 5+ */ 'Noto Mono', /* KDE Plasma 4+ */ 'Oxygen Mono',
            /* Linux/OpenOffice fallback */ 'Liberation Mono',
            /* fallback */ monospace, /* macOS emoji */ 'Apple Color Emoji',
            /* Windows emoji */ 'Segoe UI Emoji',
            /* Windows emoji */ 'Segoe UI Symbol',
            /* Linux emoji */ 'Noto Color Emoji';
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-variation-settings: 'wght' 400, 'wdth' 300;
        }
        #root {
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
