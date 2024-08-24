import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { APIUrl } from "./const/apiURL";
import { BaseName } from "./const/BaseName";

export const buildPlugins = (
    paths: BuildPaths,
    apiURL: APIUrl,
    baseName: BaseName,
    isDev: boolean
): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash:8].css',
            chunkFilename: 'assets/styles/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            'process.env.API_URL': JSON.stringify(apiURL),
            'process.env.IS_DEV': JSON.stringify(isDev),
            'process.env.BASE_NAME': JSON.stringify(baseName),
        }),
    ]
}