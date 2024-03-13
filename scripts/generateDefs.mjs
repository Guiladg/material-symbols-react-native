import { readdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { basename } from 'path';

console.info('Generating SVG definitions as string constants...');

const names = [];

const iconsDir = './downloads';
const defsDir = './definitions';

const weights = readdirSync(iconsDir);
weights.forEach((weight) => {
	const variants = readdirSync(`${iconsDir}/${weight}`);
	variants.forEach((variant) => {
		const path = `${iconsDir}/${weight}/${variant}`;
		const files = readdirSync(path);
		files.forEach((file) => {
			const name = `ms${componentName(file)}`;
			names.push(name);
			svgToJs(variant, weight, file, name);
			console.log(`${path}/${file}`, ` >>> `, `${name}.js`);
		});
		rmSync(path, { recursive: true, force: true });
		createIndexes(variant, weight, names);
	});
});

function createIndexes(variant, weight, names) {
	writeFileSync(
		`${defsDir}/${variant}/${weight}/index.js`,
		`'use strict';
Object.defineProperty(exports, '__esModule', { value: true }); ` +
			names
				.map(
					(name) =>
						`var _${name} = require('./${name}'); Object.keys(_${name}).forEach(function (key) { if (key === 'default' || key === '__esModule') return; if (key in exports && exports[key] === _${name}[key]) return; Object.defineProperty(exports, key, { enumerable: true, get: function () { return _${name}[key]; } }); });`
				)
				.join('\n'),
		'utf-8'
	);

	writeFileSync(`${defsDir}/${variant}/${weight}/index.d.ts`, names.map((name) => `export { ${name} } from './${name}';`).join('\n'), 'utf-8');
}

function svgToJs(variant, weight, file, name) {
	const svgFile = `${iconsDir}/${weight}/${variant}/${file}`;
	const jsFile = `${defsDir}/${variant}/${weight}/${name}.js`;
	const dTsFile = `${defsDir}/${variant}/${weight}/${name}.d.ts`;
	let svgData = readFileSync(svgFile, 'utf-8');

	writeFileSync(
		jsFile,
		`'use strict';
Object.defineProperty(exports, '__esModule', { 	value: true }); const ${name} = exports.${name} = { xml: '${svgData.replace(/\'/g, "\\'")}', variant: '${variant}', weight: ${weight} };`,
		'utf-8'
	);

	writeFileSync(
		dTsFile,
		`import { MsIconDefinition } from 'material-symbols-react-native';
export declare const ${name}: MsIconDefinition;`,
		'utf-8'
	);
}

function toCamelCase(str) {
	const newString = str.replace(/[-_ ]([a-z])/g, (g) => g[1].toUpperCase());
	return newString[0].toUpperCase() + newString.slice(1);
}

function componentName(file) {
	return toCamelCase(basename(file)).replace(/.svg$/, '');
}
