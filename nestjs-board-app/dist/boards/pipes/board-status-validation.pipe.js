"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const board_model_1 = require("../board.model");
class BoardStatusValidationPipe {
    constructor() {
        this.StatusOptions = [board_model_1.BoardStatus.PUBLIC, board_model_1.BoardStatus.PRIVATE];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} isn't in the status options`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
//# sourceMappingURL=board-status-validation.pipe.js.map