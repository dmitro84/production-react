import webpack from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions) {
    const {mode, paths, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev? buildDevServer(options): undefined,
    }
}