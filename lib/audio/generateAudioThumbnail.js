"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAudioThumbnail = void 0;
const path_1 = __importDefault(require("path"));
/**
 * @function generateAudioThumbnail
 * @since 1.0.0
 */
async function generateAudioThumbnail(src, dst, options) {
    let { width, height, backgroundColor, lineColor, lineWidth, } = options;
    let dir = path_1.default.dirname(src);
    let ext = path_1.default.extname(src);
    let lbl = path_1.default.basename(src, ext);
    let dw = width || 320;
    let dh = height || 240;
    lbl = [lbl, '@', dw, 'x', dh, '.jpg'].join('');
    dst = path_1.default.join(dst, lbl);
    try {
        /*
        let stream: any = await waveform.generateSoundImage(src, dw, dh, {
            stepMultiplier: 10,
            backgroundColor,
            lineColor,
            lineWidth,
            padding: 60,
        })

        await new Promise((finish, error) => {
            let writer = fs.createWriteStream(dst)
            writer.on('finish', finish)
            writer.on('error', error)
            stream.pipe(writer)
        })
        */
    }
    catch (e) {
        return null;
    }
    return [dst, dw, dh];
}
exports.generateAudioThumbnail = generateAudioThumbnail;
