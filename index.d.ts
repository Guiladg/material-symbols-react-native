import * as React from 'react';
import type { ColorValue } from 'react-native';
export interface MsIconDefinition {
	variant: 'outlined' | 'rounded' | 'sharp';
	weight: 100 | 200 | 300 | 400 | 500 | 600 | 700;
	xml: string;
}
export interface MsIconProps {
	icon: MsIconDefinition;
	color?: ColorValue;
	size?: number;
}
export declare function MsIcon({ icon, color, size }: MsIconProps): React.JSX.Element;
