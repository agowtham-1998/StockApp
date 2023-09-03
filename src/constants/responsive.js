import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

const baseWidth = 375; // Define a base width for scaling

export const RF = (fontSize) => {
    // Calculate a responsive font size
    const scale = width / baseWidth;
    const scaledFontSize = fontSize * scale;
    return Math.round(scaledFontSize);
};