import {
  MAP_ERROR,
  MAP_READY,
  USER_SUBSCRIPTIONS,
  ALL_AVAILABLE_LAYERS,
  SET_ACTIVE_FEATURES,
  SET_ACTIVE_FEATURE_INDEX,
  SET_ACTIVE_BASEMAP,
  SET_TIME_SLIDER,
  CHANGE_MAP_SCALE,
  CHANGE_MAP_CENTER_COORDINATES,
  MapviewState
} from './types';

export function isMapReady(payload: MapviewState['isMapReady']) {
  return {
    type: MAP_READY as typeof MAP_READY,
    payload
  };
}

export function mapError(payload: MapviewState['loadError']) {
  return {
    type: MAP_ERROR as typeof MAP_ERROR,
    payload
  };
}

export function setUserSubscriptions(
  payload: MapviewState['userSubscriptions']
) {
  return {
    type: USER_SUBSCRIPTIONS as typeof USER_SUBSCRIPTIONS,
    payload
  };
}

export function allAvailableLayers(
  payload: MapviewState['allAvailableLayers']
) {
  return {
    type: ALL_AVAILABLE_LAYERS as typeof ALL_AVAILABLE_LAYERS,
    payload
  };
}

export function setActiveFeatures(payload: MapviewState['activeFeatures']) {
  return {
    type: SET_ACTIVE_FEATURES as typeof SET_ACTIVE_FEATURES,
    payload
  };
}

export function setActiveFeatureIndex(
  payload: MapviewState['activeFeatureIndex']
) {
  return {
    type: SET_ACTIVE_FEATURE_INDEX as typeof SET_ACTIVE_FEATURE_INDEX,
    payload
  };
}

export function setSelectedBasemap(basemapID: MapviewState['activeBasemap']) {
  return {
    type: SET_ACTIVE_BASEMAP as typeof SET_ACTIVE_BASEMAP,
    payload: basemapID
  };
}

export function setTimeSlider(timeSlider: MapviewState['timeSlider']) {
  return {
    type: SET_TIME_SLIDER as typeof SET_TIME_SLIDER,
    payload: timeSlider
  };
}

export function changeMapScale(scale: MapviewState['scale']) {
  return {
    type: CHANGE_MAP_SCALE as typeof CHANGE_MAP_SCALE,
    payload: scale
  };
}

export function changeMapCenterCoordinates(
  mapCenterCoordinates: MapviewState['mapCenterCoordinates']
) {
  return {
    type: CHANGE_MAP_CENTER_COORDINATES as typeof CHANGE_MAP_CENTER_COORDINATES,
    payload: mapCenterCoordinates
  };
}
