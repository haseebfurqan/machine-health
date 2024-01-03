// import {calculatePartHealth, calculateMachineHealth} from '../calculations';
// import {
//   MachineType,
//   WeldingRobotPart,
//   partInfo,
// } from '../../native-app/data/types';

// describe('calculatePartHealth', () => {
//   it('calculates part health correctly', () => {
//     const machineName: MachineType = MachineType.WeldingRobot;
//     const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 0.5};
//     const expectedHealth = 72.22222222222223;

//     const result = calculatePartHealth(machineName, part);
//     expect(result).toBe(expectedHealth);
//   });
// });

// describe('calculateMachineHealth', () => {
//   it('calculates machine health correctly', () => {
//     const machineName: MachineType = MachineType.WeldingRobot;
//     const parts = [
//       {name: WeldingRobotPart.ErrorRate, value: 0.5},
//       {name: WeldingRobotPart.VibrationLevel, value: 4.0},
//       {name: WeldingRobotPart.ElectrodeWear, value: 0.8},
//       {name: WeldingRobotPart.ShieldingPressure, value: 12.0},
//       {name: WeldingRobotPart.WireFeedRate, value: 7.5},
//       {name: WeldingRobotPart.ArcStability, value: 92.0},
//       {name: WeldingRobotPart.SeamWidth, value: 1.5},
//       {name: WeldingRobotPart.CoolingEfficiency, value: 85.0},
//     ];
//     const expectedHealth = 76.70138888888889;

//     const result = calculateMachineHealth(machineName, parts);
//     expect(result).toBe(expectedHealth);
//   });
// });
