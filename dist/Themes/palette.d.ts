import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";
export interface ICustomPalette extends Palette {
    success: PaletteColor;
    cyan: PaletteColor;
    disabled: PaletteColor;
}
export declare const palette: ICustomPalette;
