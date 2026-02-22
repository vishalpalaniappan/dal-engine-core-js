import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/DALEngine.js",
    output: [
        {
            file: "dist/index.cjs",
            format: "cjs",
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
        },
    ],
    plugins: [resolve()],
};
