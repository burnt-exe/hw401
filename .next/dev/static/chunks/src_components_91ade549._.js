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
"[project]/src/components/quiz/quiz-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizBlock",
    ()=>QuizBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function QuizBlock({ title, questions }) {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizBlock.useMemo[score]": ()=>{
            return questions.reduce({
                "QuizBlock.useMemo[score]": (total, question, index)=>{
                    return total + (selected[index] === question.correctIndex ? 1 : 0);
                }
            }["QuizBlock.useMemo[score]"], 0);
        }
    }["QuizBlock.useMemo[score]"], [
        questions,
        selected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "cds--tile",
        style: {
            padding: "1.5rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "var(--cds-text-secondary)",
                            marginBottom: "0.5rem"
                        },
                        children: "Knowledge check"
                    }, void 0, false, {
                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: 0,
                            fontSize: "1.5rem",
                            fontWeight: 400
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gap: "1rem"
                },
                children: questions.map((question, qIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: "1px solid var(--cds-border-subtle)",
                            padding: "1rem",
                            background: "var(--cds-layer-accent)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "var(--cds-text-secondary)",
                                    marginBottom: "0.5rem"
                                },
                                children: [
                                    "Question ",
                                    qIndex + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: 0,
                                    fontSize: "1rem",
                                    fontWeight: 400
                                },
                                children: question.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: "0.75rem",
                                    marginTop: "1rem"
                                },
                                children: question.choices.map((choice, cIndex)=>{
                                    const isSelected = selected[qIndex] === cIndex;
                                    const isCorrect = question.correctIndex === cIndex;
                                    let border = "1px solid var(--cds-border-subtle)";
                                    let background = "var(--cds-layer)";
                                    let color = "var(--cds-text-primary)";
                                    if (!submitted && isSelected) {
                                        border = "1px solid var(--cds-border-interactive)";
                                        background = "rgba(15, 98, 254, 0.12)";
                                    }
                                    if (submitted && isCorrect) {
                                        border = "1px solid #24a148";
                                        background = "rgba(36, 161, 72, 0.14)";
                                    } else if (submitted && isSelected && !isCorrect) {
                                        border = "1px solid #da1e28";
                                        background = "rgba(218, 30, 40, 0.14)";
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: submitted,
                                        onClick: ()=>setSelected((prev)=>({
                                                    ...prev,
                                                    [qIndex]: cIndex
                                                })),
                                        style: {
                                            textAlign: "left",
                                            padding: "0.875rem 1rem",
                                            border,
                                            background,
                                            color,
                                            cursor: submitted ? "default" : "pointer"
                                        },
                                        children: choice
                                    }, choice, false, {
                                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "1rem",
                                    padding: "0.875rem 1rem",
                                    borderLeft: "4px solid var(--cds-interactive)",
                                    background: "var(--cds-layer)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: "var(--cds-text-secondary)",
                                            marginBottom: "0.25rem"
                                        },
                                        children: "Explanation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: question.explanation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        ]
                    }, question.question, true, {
                        fileName: "[project]/src/components/quiz/quiz-block.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    marginTop: "1.5rem",
                    flexWrap: "wrap"
                },
                children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setSubmitted(true),
                    className: "cds--btn cds--btn--primary",
                    children: "Submit quiz"
                }, void 0, false, {
                    fileName: "[project]/src/components/quiz/quiz-block.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "0.75rem 1rem",
                                border: "1px solid var(--cds-border-subtle)",
                                background: "var(--cds-layer)"
                            },
                            children: [
                                "Score: ",
                                score,
                                " / ",
                                questions.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/quiz/quiz-block.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setSelected({});
                                setSubmitted(false);
                            },
                            className: "cds--btn cds--btn--secondary",
                            children: "Retry quiz"
                        }, void 0, false, {
                            fileName: "[project]/src/components/quiz/quiz-block.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/quiz/quiz-block.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/quiz/quiz-block.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(QuizBlock, "foKhBLFQFb8UBFf88tnu1KQYX88=");
_c = QuizBlock;
var _c;
__turbopack_context__.k.register(_c, "QuizBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_91ade549._.js.map