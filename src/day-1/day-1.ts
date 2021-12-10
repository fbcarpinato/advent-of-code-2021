import * as fs from 'fs';
import * as path from 'path';

export default function solve(filePath: string) {
  const file = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');

  const measurements = file
    .split('\n')
    .filter((m) => m)
    .map(Number);

  let referenceMeasurement: number | null = null;

  let increasingMeasurements = 0;

  measurements.forEach((measurement) => {
    if (!referenceMeasurement) {
      referenceMeasurement = measurement;
      return;
    }

    if (measurement > referenceMeasurement) {
      increasingMeasurements += 1;
    }

    referenceMeasurement = measurement;
  });

  return increasingMeasurements;
}
