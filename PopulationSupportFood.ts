import Food from '@civ-clone/base-terrain-yield-food/Food';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class PopulationSupportFood extends Food {}

makeNegative(PopulationSupportFood);

export default PopulationSupportFood;
