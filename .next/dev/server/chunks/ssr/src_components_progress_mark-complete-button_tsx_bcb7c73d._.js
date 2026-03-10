module.exports = [
"[project]/src/components/progress/mark-complete-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkCompleteButton",
    ()=>MarkCompleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function MarkCompleteButton({ storageKey }) {
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const value = window.localStorage.getItem(storageKey);
        setDone(value === "true");
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
];

//# sourceMappingURL=src_components_progress_mark-complete-button_tsx_bcb7c73d._.js.map