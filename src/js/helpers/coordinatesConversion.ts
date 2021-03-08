import { loadModules } from 'esri-loader';

import {
  SpecificDMSSection,
  SpecificDDSection
} from '../interfaces/coordinateForm';

export const convertDMSToXY = async (
  setDMSForm: Array<SpecificDMSSection>
): Promise<__esri.Point[]> => {
  const [Point] = await loadModules(['esri/geometry/Point']);
  return setDMSForm.map(point => {
    const { latitude, longitude } = point;
    let convertedLatitude;
    let convertedLongitude;
    if (latitude.cardinalPoint === 'N') {
      convertedLatitude =
        Number(latitude.seconds) / 3600 +
        Number(latitude.minutes) / 60 +
        Number(latitude.degree);
    } else {
      convertedLatitude =
        (Number(longitude.seconds) / 3600 -
          Number(longitude.minutes) / 60 +
          Number(longitude.degree)) *
        -1;
    }

    if (longitude.cardinalPoint === 'E') {
      convertedLongitude =
        Number(longitude.seconds) / 3600 +
        Number(longitude.minutes) / 60 +
        Number(longitude.degree);
    } else {
      convertedLongitude =
        Number(longitude.seconds) / 3600 +
        Number(longitude.minutes) / 60 +
        Number(longitude.degree) * -1;
    }

    return new Point({
      latitude: convertedLatitude,
      longitude: convertedLongitude
    });
  });
};

export const convertXYToPoint = async (
  setDDForm: Array<SpecificDDSection>
): Promise<__esri.Point[]> => {
  const [Point] = await loadModules(['esri/geometry/Point']);
  return setDDForm.map(point => {
    const { latitude, longitude } = point;

    return new Point({
      latitude: Number(latitude),
      longitude: Number(longitude)
    });
  });
};
