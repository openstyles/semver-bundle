import cjs from 'rollup-plugin-cjs-es';
import re from 'rollup-plugin-re';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

export default {
	input: 'index.js',
	output: {
		file: 'dist/semver.js',
		name: 'semverCompare',
		format: 'iife'
	},
	plugins: [
		resolve(),
		re({
			patterns: [{
				test: /(\w+) = exports\.(\w+)( =.*)/g,
				replace: '$1$3\nexports.$2 = $1;'
			}, {
				test: /exports\.(\w+\()/g,
				replace: '$1'
			}, {
				test: /exports = module\.exports.*/g,
				replace: ''
			}, {
				test: /debug\(.+?\);/g,
				replace: ''
			}, {
				test: /^\s*(\/\* nomin \*\/).+/gm,
				replace: ''
			}]
		}),
		cjs({nested: true}),
		uglify()
	]
};
