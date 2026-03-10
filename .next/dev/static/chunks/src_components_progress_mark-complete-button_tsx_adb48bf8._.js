(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/progress/mark-complete-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkCompleteButton",
    ()=>MarkCompleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MarkCompleteButton({ storageKey }) {
    _s();
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarkCompleteButton.useEffect": ()=>{
            const value = window.localStorage.getItem(storageKey);
            setDone(value === "true");
        }
    }["MarkCompleteButton.useEffect"], [
        storageKey
    ]);
    function handleClick() {
        const nextDone = !done;
        window.localStorage.setItem(storageKey, String(nextDone));
        const trackedKeys = [
            "hw401-week1-complete",
            "hw401-week2-complete",
            "hw401-week3-complete",
            "hw401-stuxnet-complete",
            "hw401-notpetya-complete",
            "hw401-ukraine-power-grid-complete",
            "hw401-solarwinds-complete",
            "hw401-colonial-pipeline-complete",
            "hw401-tallinn-manual-complete",
            "hw401-cyber-deterrence-complete",
            "hw401-ooda-in-cyber-complete"
        ];
        const completedCount = trackedKeys.filter((key)=>key === storageKey ? nextDone : window.localStorage.getItem(key) === "true").length;
        window.localStorage.setItem("hw401-progress-completed", String(completedCount));
        setDone(nextDone);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        className: done ? "cds--btn cds--btn--tertiary" : "cds--btn cds--btn--primary",
        children: done ? "Completed" : "Mark as complete"
    }, void 0, false, {
        fileName: "[project]/src/components/progress/mark-complete-button.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(MarkCompleteButton, "dG0Xu/UHLyKNC3cIz8t84yBdglk=");
_c = MarkCompleteButton;
var _c;
__turbopack_context__.k.register(_c, "MarkCompleteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_progress_mark-complete-button_tsx_adb48bf8._.js.map