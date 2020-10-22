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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
/**
 * @function generateImageThumbnail
 * @since 1.0.0
 */
function generateImageThumbnail(src, dst, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let dir = path_1.default.dirname(src);
        let ext = path_1.default.extname(src);
        let lbl = path_1.default.basename(src, ext);
        let meta = yield sharp_1.default(src).metadata();
        let w = meta.width;
        let h = meta.height;
        if (w == null ||
            h == null) {
            return null;
        }
        let { dw, dh } = resize(w, h, options.width, options.height);
        lbl = [lbl, '@', dw, 'x', dh, ext].join('');
        dst = path_1.default.join(dst, lbl);
        try {
            yield sharp_1.default(src).resize(options).toFile(dst);
        }
        catch (e) {
            return null;
        }
        return dst;
    });
}
exports.generateImageThumbnail = generateImageThumbnail;
/**
 * @function resize
 * @since 1.0.0
 * @hidden
 */
function resize(srcW, srcH, dstW, dstH) {
    if (dstW != null &&
        dstH != null) {
        dstW = Math.ceil(dstW);
        dstH = Math.ceil(dstH);
    }
    else if (dstW) {
        dstH = Math.ceil(dstW * (srcH / srcW));
    }
    else if (dstH) {
        dstW = Math.ceil(dstH * (srcW / srcH));
    }
    return {
        dw: dstW,
        dh: dstH
    };
}
