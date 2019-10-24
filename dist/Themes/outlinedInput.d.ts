export declare const outlinedInput: {
    root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: string;
        };
        "&$focused:not($error)": {
            "& $notchedOutline": {
                border: string;
            };
        };
        "&$error": {
            "& $notchedOutline": {
                border: string;
            };
        };
    };
    notchedOutline: {
        border: string;
        borderColor: string;
    };
    disabled: {};
};
