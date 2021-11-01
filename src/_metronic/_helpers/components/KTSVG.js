import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../AssetsHelpers';
const KTSVG = ({ className = '', path, svgClassName = 'mh-50px' }) => {
    return (React.createElement("span", { className: `svg-icon ${className}` },
        React.createElement(SVG, { src: toAbsoluteUrl(path), className: svgClassName })));
};
export { KTSVG };
