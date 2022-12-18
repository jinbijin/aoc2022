import { Injectable } from "@angular/core";
import { PuzzlePart } from "advent-of-code-2022";
import { Puzzle } from "./common/puzzle.enum";

@Injectable({ providedIn: 'root' })
export class PuzzleConfigService {
  readonly puzzles = [
    { label: 'Day 1: Calorie Counting', solver: Puzzle.CalorieCounting },
    { label: 'Day 2: Rock Paper Scissors', solver: Puzzle.RockPaperScissors },
    { label: 'Day 3: Rucksack Reorganization', solver: Puzzle.RucksackReorganization },
    { label: 'Day 4: Camp Cleanup', solver: Puzzle.CampCleanup },
    { label: 'Day 5: Supply Stacks', solver: Puzzle.SupplyStacks },
    { label: 'Day 6: Tuning Trouble', solver: Puzzle.TuningTrouble },
    { label: 'Day 7: No Space Left On Device', solver: Puzzle.NoSpaceLeftOnDevice },
    { label: 'Day 8: Treetop Tree House', solver: Puzzle.TreetopTreeHouse },
    { label: 'Day 9: Rope Bridge', solver: Puzzle.RopeBridge },
    { label: 'Day 10: Cathode-Ray Tube', solver: Puzzle.CathodeRayTube },
    { label: 'Day 11: Monkey in the Middle', solver: Puzzle.MonkeyInTheMiddle },
    { label: 'Day 12: Hill Climbing Algorithm', solver: Puzzle.HillClimbingAlgorithm },
    { label: 'Day 13: Distress Signal', solver: Puzzle.DistressSignal },
    { label: 'Day 14: Regolith Reservoir', solver: Puzzle.RegolithReservoir },
    { label: 'Day 15: Beacon Exclusion Zone', solver: Puzzle.BeaconExclusionZone },
    { label: 'Day 16: Proboscidea Volcanium', solver: Puzzle.ProboscideaVolcanium },
    { label: 'Day 17: Pyroclastic Flow', solver: Puzzle.PyroclasticFlow },
    { label: 'Day 18: Boiling Boulders', solver: Puzzle.BoilingBoulders },
  ];
  readonly parts = [
    { label: 'Part 1', part: PuzzlePart.Part1 },
    { label: 'Part 2', part: PuzzlePart.Part2 },
  ];
}
