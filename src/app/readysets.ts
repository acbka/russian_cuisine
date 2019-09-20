import { ReadySet } from './readyset';
import { getDish } from './getdish';

export let readySets: ReadySet[] = [
  {
    name: "Set 1",
    dishes: [
      getDish(102), getDish(103),
      getDish(205), getDish(207),
      getDish(302), getDish(303),
      getDish(402), getDish(506)
    ],
    selected: false
  },
  {
    name: "Set 2",
    dishes:
      [
        getDish(101), getDish(107),
        getDish(206), getDish(202),
        getDish(302), getDish(305),
        getDish(401), getDish(506)
      ],
    selected: false
  },
  {
    name: "set 3",
    dishes: [
      getDish(101), getDish(103),
      getDish(201), getDish(202),
      getDish(302), getDish(305),
      getDish(401), getDish(506)
    ],
    selected: false
  }
];
