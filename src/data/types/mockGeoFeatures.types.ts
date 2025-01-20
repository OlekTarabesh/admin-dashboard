export interface IGeoFeaturesProperties {
  name: string;
}

type TCoordinate = [number, number];

type TPolygon = TCoordinate | TCoordinate[] | TCoordinate[][];

type TCoordinates = TPolygon[][];

export interface IGeoFeaturesGeometry {
  type: "Polygon" | "MultiPolygon";
  coordinates: TCoordinates | TPolygon;
  id?: string;
}

export interface IFeatures {
  type: "Feature";
  properties: IGeoFeaturesProperties;
  geometry: IGeoFeaturesGeometry;
  id?: string;
}

export interface IGeoFeatures {
  type: "FeatureCollection";
  features: IFeatures[];
}
