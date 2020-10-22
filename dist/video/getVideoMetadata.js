"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_ffmpeg_1 = require("fluent-ffmpeg");
/**
 * @function getVideoMetadata
 * @since 1.0.0
 */
function getVideoMetadata(video) {
    return __awaiter(this, void 0, void 0, function* () {
        let meta = yield probe(video);
        if (meta == null ||
            meta.format == null) {
            return null;
        }
        let length = meta.format.nb_streams;
        if (length == null ||
            length <= 0) {
            return null;
        }
        return {
            duration: meta.format.duration || 0,
            height: meta.streams[0].height || 0,
            width: meta.streams[0].width || 0
        };
    });
}
exports.getVideoMetadata = getVideoMetadata;
/**
 * @function probe
 * @since 1.0.0
 * @hidden
 */
function probe(source) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((success, failure) => {
            fluent_ffmpeg_1.ffprobe(source, (err, res) => err ? failure(err) : success(res));
        });
    });
}
