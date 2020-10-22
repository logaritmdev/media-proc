"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MusicMetadata = __importStar(require("music-metadata"));
/**
 * @function getAudioMetadata
 * @since 1.0.0
 */
async function getAudioMetadata(src) {
    let meta = await MusicMetadata.parseFile(src, { duration: true });
    if (meta == null) {
        return null;
    }
    return {
        duration: meta.format.duration || 0
    };
}
exports.getAudioMetadata = getAudioMetadata;
