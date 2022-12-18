import { Injectable } from "@angular/core";
import { beacon_exclusion_zone, boiling_boulders, calorie_counting, camp_cleanup, cathode_ray_tube, distress_signal, hill_climbing_algorithm, monkey_in_the_middle, no_space_left_on_device, proboscidea_volcanium, PuzzlePart, pyroclastic_flow, regolith_reservoir, rock_paper_scissors, rope_bridge, rucksack_reorganization, supply_stacks, treetop_tree_house, tuning_trouble } from "advent-of-code-2022";

@Injectable({ providedIn: 'root' })
export class PuzzleConfigService {
  readonly puzzles = [
    { label: 'Day 1: Calorie Counting', solver: calorie_counting },
    { label: 'Day 2: Rock Paper Scissors', solver: rock_paper_scissors },
    { label: 'Day 3: Rucksack Reorganization', solver: rucksack_reorganization },
    { label: 'Day 4: Camp Cleanup', solver: camp_cleanup },
    { label: 'Day 5: Supply Stacks', solver: supply_stacks },
    { label: 'Day 6: Tuning Trouble', solver: tuning_trouble },
    { label: 'Day 7: No Space Left On Device', solver: no_space_left_on_device },
    { label: 'Day 8: Treetop Tree House', solver: treetop_tree_house },
    { label: 'Day 9: Rope Bridge', solver: rope_bridge },
    { label: 'Day 10: Cathode-Ray Tube', solver: cathode_ray_tube },
    { label: 'Day 11: Monkey in the Middle', solver: monkey_in_the_middle },
    { label: 'Day 12: Hill Climbing Algorithm', solver: hill_climbing_algorithm },
    { label: 'Day 13: Distress Signal', solver: distress_signal },
    { label: 'Day 14: Regolith Reservoir', solver: regolith_reservoir },
    { label: 'Day 15: Beacon Exclusion Zone', solver: beacon_exclusion_zone },
    { label: 'Day 16: Proboscidea Volcanium', solver: proboscidea_volcanium },
    { label: 'Day 17: Pyroclastic Flow', solver: pyroclastic_flow },
    { label: 'Day 18: Boiling Boulders', solver: boiling_boulders },
  ];
  readonly parts = [
    { label: 'Part 1', part: PuzzlePart.Part1 },
    { label: 'Part 2', part: PuzzlePart.Part2 },
  ];
}
