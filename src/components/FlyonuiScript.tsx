// FlyonuiScript.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Optional third-party libraries
// import 'datatables.net';
// import 'dropzone/dist/dropzone-min.js';
import $ from 'jquery';
import _ from 'lodash';
import noUiSlider from 'nouislider';

async function loadFlyonUI() {
    return import('flyonui/flyonui');
}

export default function FlyonuiScript() {
    const path = usePathname();

    useEffect(() => {
        const initFlyonUI = async () => {
            await loadFlyonUI();
        };

        if (typeof window !== 'undefined') {
            window.$ = $;
            window._ = _;
            window.jQuery = $;
            // window.DataTable = $.fn.dataTable;
            window.noUiSlider = noUiSlider;
        }

        initFlyonUI();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (
                window.HSStaticMethods &&
                typeof window.HSStaticMethods.autoInit === 'function'
            ) {
                window.HSStaticMethods.autoInit();
            }
        }, 100);
    }, [path]);

    return null;
}