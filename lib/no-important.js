'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('./exports-a194eb22.js');
require('string-hash');
require('asap');

/* @flow */
var useImportant = false; // Don't add !important to style definitions

var Aphrodite = exports$1.makeExports(useImportant);
var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers,
    reset = Aphrodite.reset,
    resetInjectedStyle = Aphrodite.resetInjectedStyle;

exports.StyleSheet = StyleSheet;
exports.StyleSheetServer = StyleSheetServer;
exports.StyleSheetTestUtils = StyleSheetTestUtils;
exports.css = css;
exports.defaultSelectorHandlers = defaultSelectorHandlers;
exports.flushToStyleTag = flushToStyleTag;
exports.injectAndGetClassName = injectAndGetClassName;
exports.minify = minify;
exports.reset = reset;
exports.resetInjectedStyle = resetInjectedStyle;
