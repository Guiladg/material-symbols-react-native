import { readdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { basename } from 'path';
import ProgressBar from 'progress';

const names = [];
const iconsDir = './downloads';
const defsDir = './definitions';
let total = 0;

// Count files to convert
const weights = readdirSync(iconsDir);
weights.forEach((weight) => {
	const variants = readdirSync(`${iconsDir}/${weight}`);
	variants.forEach((variant) => {
		const files = readdirSync(`${iconsDir}/${weight}/${variant}`);
		total = total + files.length;
	});
});

// Set progress bar
const bar = new ProgressBar(':bar (:current/:total) :eta :file', {
	total,
	complete: '█',
	incomplete: '░',
	width: 30
});

// Generate definitions
weights.forEach((weight) => {
	const variants = readdirSync(`${iconsDir}/${weight}`);
	variants.forEach((variant) => {
		const path = `${iconsDir}/${weight}/${variant}`;
		const files = readdirSync(path);
		files.forEach((file) => {
			const name = `ms${componentName(file)}`;
			names.push(name);
			svgToJs(variant, weight, file, name);
			bar.tick({ file: `${variant}/${weight}/${name}` });
		});
		rmSync(path, { recursive: true, force: true });
		createIndexes(variant, weight, names);
	});
});
console.info('\n\n');

function createIndexes(variant, weight, names) {
	// Create index.js file with all the exported names
	writeFileSync(
		`${defsDir}/${variant}/${weight}/index.js`,
		`'use strict';\nObject.defineProperty(exports, '__esModule', { value: true }); ` +
			names
				.map(
					(name) =>
						`var _${name} = require('./${name}'); Object.keys(_${name}).forEach(function (key) { if (key === 'default' || key === '__esModule') return; if (key in exports && exports[key] === _${name}[key]) return; Object.defineProperty(exports, key, { enumerable: true, get: function () { return _${name}[key]; } }); });`
				)
				.join('\n'),
		'utf-8'
	);
	// Create index.d.ts file with all the exported names
	writeFileSync(`${defsDir}/${variant}/${weight}/index.d.ts`, names.map((name) => `export { ${name} } from './${name}';`).join('\n'), 'utf-8');
}

function svgToJs(variant, weight, file, name) {
	const svgFile = `${iconsDir}/${weight}/${variant}/${file}`;
	const jsFile = `${defsDir}/${variant}/${weight}/${name}.js`;
	const dTsFile = `${defsDir}/${variant}/${weight}/${name}.d.ts`;
	let svgData = readFileSync(svgFile, 'utf-8');

	// Create JS file with SVG data
	writeFileSync(
		jsFile,
		`'use strict';\nObject.defineProperty(exports, '__esModule', { 	value: true }); const ${name} = exports.${name} = { xml: '${svgData.replace(/\'/g, "\\'")}', variant: '${variant}', weight: ${weight} };`,
		'utf-8'
	);
	// Create .d.ts file
	writeFileSync(dTsFile, `import { MsIconDefinition } from 'material-symbols-react-native';\nexport declare const ${name}: MsIconDefinition;`, 'utf-8');
}

function toCamelCase(str) {
	const newString = str.replace(/[-_ ]([a-z])/g, (g) => g[1].toUpperCase());
	return newString[0].toUpperCase() + newString.slice(1);
}

function componentName(file) {
	return toCamelCase(basename(file)).replace(/.svg$/, '');
}
