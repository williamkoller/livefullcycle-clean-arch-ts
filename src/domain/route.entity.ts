import crypto from 'crypto';

export type LatLgn = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  startPosition: LatLgn;
  endPosition: LatLgn;
  points?: LatLgn[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;
  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    this.title = title;
  }

  get title(): string {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  updatePosition(startPosition: LatLgn, endPosition: LatLgn) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLgn) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLgn) {
    this.props.endPosition = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
