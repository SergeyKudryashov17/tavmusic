import { BuildProps } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { BuildMode } from './const/BuildMode';
import { APIUrl } from './const/apiURL';
import { BaseName } from './const/BaseName';

export const buildWebpackConfig = (options: BuildProps) => {
    const {
        paths,
        mode,
        isDev,
        port
    } = options;

    const API_URL = (() => {
        switch (mode) {
            case BuildMode.Prod: return APIUrl.Prod;
            case BuildMode.Dev: return APIUrl.Dev;
            case BuildMode.Test: return APIUrl.Test;
        }
      })();

    const BASE_NAME = (() => {
        switch (mode) {
            case BuildMode.Prod: return BaseName.Prod;
            case BuildMode.Dev: return BaseName.Dev;
            case BuildMode.Test: return BaseName.Test;
        }
    })();

    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(paths),
        output: {
            filename: 'js/[name].[contenthash].js',
            path: paths.build,
            clean: true,
            assetModuleFilename: 'assets/fonts/[name][ext][query]'
        },
        plugins: buildPlugins(paths, API_URL, BASE_NAME, isDev),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(port, BASE_NAME) : undefined,
    }
}