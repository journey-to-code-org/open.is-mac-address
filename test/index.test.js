import test from "node:test";import assert from "node:assert/strict";import{isMacAddress}from"../src/index.js";
test("colon",()=>assert.equal(isMacAddress("00:1A:2B:3C:4D:5E"),true));
test("dotted",()=>assert.equal(isMacAddress("001A.2B3C.4D5E"),true));
test("invalid",()=>assert.equal(isMacAddress("00:11:22"),false));
