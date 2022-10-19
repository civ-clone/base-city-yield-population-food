"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulationSupportFood = void 0;
const Food_1 = require("@civ-clone/base-terrain-yield-food/Food");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class PopulationSupportFood extends Food_1.default {
}
exports.PopulationSupportFood = PopulationSupportFood;
(0, NegativeYield_1.makeNegative)(PopulationSupportFood);
exports.default = PopulationSupportFood;
//# sourceMappingURL=PopulationSupportFood.js.map