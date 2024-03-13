'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.MsIcon = MsIcon;
var React = _interopRequireWildcard(require('react'));
var _reactNativeSvg = require('react-native-svg');
function _getRequireWildcardCache(e) {
	if ('function' != typeof WeakMap) return null;
	var r = new WeakMap(),
		t = new WeakMap();
	return (_getRequireWildcardCache = function (e) {
		return e ? t : r;
	})(e);
}
function _interopRequireWildcard(e, r) {
	if (!r && e && e.__esModule) return e;
	if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
	var t = _getRequireWildcardCache(r);
	if (t && t.has(e)) return t.get(e);
	var n = { __proto__: null },
		a = Object.defineProperty && Object.getOwnPropertyDescriptor;
	for (var u in e)
		if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
			var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
			i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
		}
	return (n.default = e), t && t.set(e, n), n;
}
function MsIcon({ icon, color = '#000000', size = 24 }) {
	var _icon$xml$match;
	// Take the original SVG tag
	const fullSvgTag = ((_icon$xml$match = icon.xml.match(/<svg[^>]*>/)) === null || _icon$xml$match === void 0 ? void 0 : _icon$xml$match[0]) ?? '';
	// Remove attributes and opening
	const strippedSvgTag = fullSvgTag.replace(/\s(fill|height|width)="[^"]*"/gis, '').substring(5);
	// Create a new tag with attributes
	const newSvgTag = `<svg width="${size}" height="${size}" fill="${String(color)}" ${strippedSvgTag}`;
	// Replace the original SVG tag with the new one
	const newXml = icon.xml.replace(fullSvgTag, newSvgTag);
	return /*#__PURE__*/ React.createElement(_reactNativeSvg.SvgXml, {
		xml: newXml
	});
}
