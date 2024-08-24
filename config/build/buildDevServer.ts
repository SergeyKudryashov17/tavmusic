import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BaseName } from './const/BaseName';

export function buildDevServer(port: number, baseName: BaseName): DevServerConfiguration {
    return {
        port: port,
        open: baseName,
        historyApiFallback: true,
        hot: true,
    };
}