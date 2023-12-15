/**
 * @fileoverview Tests for the Fsx class.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import { Fsx, NoSuchMethodError, ImplAreadySetError } from "../src/fsx.js";
import assert from "node:assert";

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Strips the timestamp from a log entry.
 * @param {LogEntry} logEntry The log entry to strip.
 * @returns {object} The log entry without the timestamp.
 */
function stripTimestamp({ timestamp, ...rest }) {
	return rest;
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("Fsx", () => {
	describe("Missing Methods", () => {
		["text", "json", "arrayBuffer"].forEach(methodName => {
			it(`should throw an error when the ${methodName}() method is not present on the impl`, () => {
				const fsx = new Fsx({ impl: {} });

				assert.rejects(
					fsx[methodName]("/path/to/file.txt"),
					new NoSuchMethodError(methodName),
				);
			});
		});
	});

	describe("Changing impl", () => {
		it("should change the impl when setImpl() is called", async () => {
			const fsx = new Fsx({ impl: {} });
			const impl1 = {
				text() {
					return "Hello, world!";
				},
			};

			fsx.setImpl(impl1);

			const result = await fsx.text("/path/to/file.txt");
			assert.strictEqual(result, "Hello, world!");
		});

		it("should change the impl back when resetImpl() is called", async () => {
			const fsx = new Fsx({ impl: {} });
			const impl1 = {
				text() {
					return "Hello, world!";
				},
			};

			fsx.setImpl(impl1);

			const result = await fsx.text("/path/to/file.txt");
			assert.strictEqual(result, "Hello, world!");

			fsx.resetImpl();

			assert.rejects(
				fsx.text("/path/to/file.txt"),
				new NoSuchMethodError("text"),
			);
		});

		it("should throw an error when setImpl() is called twice", async () => {
			const fsx = new Fsx({ impl: {} });
			fsx.setImpl({});

			assert.throws(() => {
				fsx.setImpl({});
			}, new ImplAreadySetError());
		});

		it("should return true for isBaseImpl() when the base impl is in use", () => {
			const fsx = new Fsx({ impl: {} });
			assert.strictEqual(fsx.isBaseImpl(), true);
		});

		it("should return true for isBaseImpl() when the impl is reset", () => {
			const fsx = new Fsx({ impl: {} });
			const impl1 = {
				text() {
					return "Hello, world!";
				},
			};

			fsx.setImpl(impl1);
			assert.strictEqual(fsx.isBaseImpl(), false);

			fsx.resetImpl();
			assert.strictEqual(fsx.isBaseImpl(), true);
		});
	});

	describe("logStart() and logEnd()", () => {
		it("should start a new log and add an entry", async () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			fsx.logStart("test");
			await fsx.text("/path/to/file.txt");
			const logs = fsx.logEnd("test").map(stripTimestamp);
			assert.deepStrictEqual(logs, [
				{
					methodName: "text",
					args: ["/path/to/file.txt"],
				},
			]);
		});

		it("should start two new logs and add an entry to both", async () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			fsx.logStart("test1");
			fsx.logStart("test2");
			await fsx.text("/path/to/file.txt");
			const logs1 = fsx.logEnd("test1").map(stripTimestamp);
			const logs2 = fsx.logEnd("test2").map(stripTimestamp);

			assert.deepStrictEqual(logs1, [
				{
					methodName: "text",
					args: ["/path/to/file.txt"],
				},
			]);
			assert.deepStrictEqual(logs2, [
				{
					methodName: "text",
					args: ["/path/to/file.txt"],
				},
			]);
		});
	});

	describe("text", () => {
		
		it("should return the text from the file", async () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			const result = await fsx.text("/path/to/file.txt");
			assert.strictEqual(result, "Hello, world!");
		});

		it("should log the method call", async () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			fsx.logStart("text");
			fsx.text("/path/to/file.txt");
			const logs = fsx.logEnd("text").map(stripTimestamp);
			assert.deepStrictEqual(logs, [
				{
					methodName: "text",
					args: ["/path/to/file.txt"],
				},
			]);
		});

		it("should throw an error when the file path is not a string", () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			assert.rejects(
				fsx.text(123),
				new TypeError("File path must be a non-empty string."),
			);
		});

		it("should throw an error when the file path is empty", () => {
			const fsx = new Fsx({
				impl: {
					text() {
						return "Hello, world!";
					},
				},
			});

			assert.rejects(
				fsx.text(""),
				new TypeError("File path must be a non-empty string."),
			);
		});
	});

	describe("json", () => {

		it("should return the JSON from the file", async () => {
			const fsx = new Fsx({
				impl: {
					json() {
						return { foo: "bar" };
					},
				},
			});

			const result = await fsx.json("/path/to/file.txt");
			assert.deepStrictEqual(result, { foo: "bar" });
		});

		it("should log the method call", async () => {
			const fsx = new Fsx({
				impl: {
					json() {
						return { foo: "bar" };
					},
				},
			});

			fsx.logStart("json");
			await fsx.json("/path/to/file.txt");
			const logs = fsx.logEnd("json").map(stripTimestamp);
			assert.deepStrictEqual(logs, [
				{
					methodName: "json",
					args: ["/path/to/file.txt"],
				},
			]);
		});

		it("should throw an error when the file path is not a string", () => {
			const fsx = new Fsx({
				impl: {
					json() {
						return { foo: "bar" };
					},
				},
			});

			assert.rejects(
				fsx.json(123),
				new TypeError("File path must be a non-empty string."),
			);
		});

		it("should throw an error when the file path is empty", () => {
			const fsx = new Fsx({
				impl: {
					json() {
						return { foo: "bar" };
					},
				},
			});

			assert.rejects(
				fsx.json(""),
				new TypeError("File path must be a non-empty string."),
			);
		});
	});

	describe("arrayBuffer", () => {

		it("should return the ArrayBuffer from the file", async () => {

			const fsx = new Fsx({
				impl: {
					arrayBuffer() {
						return new Uint8Array([1, 2, 3]).buffer;
					},
				},
			});

			const result = await fsx.arrayBuffer("/path/to/file.txt");
			assert.deepStrictEqual(result, new Uint8Array([1, 2, 3]).buffer);
		});

		it("should log the method call", async () => {
			const fsx = new Fsx({
				impl: {
					arrayBuffer() {
						return new Uint8Array([1, 2, 3]).buffer;
					},
				},
			});

			fsx.logStart("arrayBuffer");
			await fsx.arrayBuffer("/path/to/file.txt");
			const logs = fsx.logEnd("arrayBuffer").map(stripTimestamp);
			assert.deepStrictEqual(logs, [
				{
					methodName: "arrayBuffer",
					args: ["/path/to/file.txt"],
				},
			]);
		});

		it("should throw an error when the file path is not a string", () => {
			const fsx = new Fsx({
				impl: {
					arrayBuffer() {
						return new Uint8Array([1, 2, 3]).buffer;
					},
				},
			});

			assert.rejects(
				fsx.arrayBuffer(123),
				new TypeError("File path must be a non-empty string."),
			);
		});

		it("should throw an error when the file path is empty", () => {
			const fsx = new Fsx({
				impl: {
					arrayBuffer() {
						return new Uint8Array([1, 2, 3]).buffer;
					},
				},
			});

			assert.rejects(
				fsx.arrayBuffer(""),
				new TypeError("File path must be a non-empty string."),
			);
		});

	});

	describe("write()", () => {

		it("should not throw an error when the file path is a string", async () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			await fsx.write("/path/to/file.txt", "Hello, world!");
		});

		it("should not throw an error when the file path is an ArrayBuffer", async () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			await fsx.write("/path/to/file.txt", new Uint8Array([1, 2, 3]).buffer);
		});

		it("should log the method call", async () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			fsx.logStart("write");
			await fsx.write("/path/to/file.txt", "Hello, world!");
			const logs = fsx.logEnd("write").map(stripTimestamp);
			assert.deepStrictEqual(logs, [
				{
					methodName: "write",
					args: ["/path/to/file.txt", "Hello, world!"],
				},
			]);
		});

		it("should throw an error when the file path is not a string", () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			assert.rejects(
				fsx.write(123, "Hello, world!"),
				new TypeError("File path must be a non-empty string."),
			);
		});

		it("should throw an error when the file path is empty", () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			assert.rejects(
				fsx.write("", "Hello, world!"),
				new TypeError("File path must be a non-empty string."),
			);
		});

		it("should throw an error when the contents are not a string or ArrayBuffer", () => {
			const fsx = new Fsx({
				impl: {
					write() {
						return undefined;
					},
				},
			});

			assert.rejects(
				fsx.write("/path/to/file.txt", 123),
				new TypeError("File contents must be a string or ArrayBuffer."),
			);
		});
	});
});
