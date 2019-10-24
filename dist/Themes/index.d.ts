import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { ICustomPalette } from "./palette";
interface _ITheme extends Theme {
    palette: ICustomPalette;
}
export declare type ITheme = _ITheme;
export declare const themeWithCustoms: Theme;
export {};
