import {BuildOptions} from "./types/config";
import {Configuration as DevSeverConfiguration} from "webpack-dev-server";


export default function buildDevServer(options: BuildOptions): DevSeverConfiguration {
    return {
        port: options.port,
        open: true,


    }

}