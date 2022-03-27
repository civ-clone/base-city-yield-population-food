import Yield from '@civ-clone/core-yield/Yield';

export class PopulationSupportFood extends Yield {
  constructor(value: Yield | number) {
    super(value, 'PopulationSupport');
  }
}

export default PopulationSupportFood;
