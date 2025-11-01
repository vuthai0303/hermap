// global.d.ts
import { IStaticMethods } from "flyonui/flyonui";

declare global {
    interface Window {
        // Optional third-party libraries
        _;
        $: typeof import("jquery");
        jQuery: typeof import("jquery");
        noUiSlider;
        DataTable;
        Dropzone;

        HSStaticMethods: IStaticMethods;
    }
}

export { };

