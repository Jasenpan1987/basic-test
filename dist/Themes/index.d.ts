import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { ICustomPalette } from "./palette";
export interface ITheme extends Theme {
    palette: ICustomPalette;
}
export declare const themeWithCustoms: Theme;
