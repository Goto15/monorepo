/*  https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web */
/*  This Point class is here for demonstration puposes, specifically of what the
    following functions expect not what they require. Usually these will be translated to
    JavaScript and used on 2D points, but I've included the z point just for my future
    sanity. */
class Point {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number = null){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

/*  Rotates a shape by x degrees */
function rotate(pointArray: Array<Point>, degree: number){
  let newPoints = Array(pointArray.length);

  pointArray.forEach((point, index) => {
    let x = point.x*Math.cos(degree) - point.y*Math.sin(degree);
    let y = point.x*Math.sin(degree) + point.y*Math.cos(degree);
    /* There should be a z point rotation here, but I dunno math */
    newPoints[index] = [x, y];
  });

  return newPoints;
}

/*  Moves a shape by the x, y, and z values provided in the Point object */
function translate(pointArray: Array<Point>, translationPoint: Point){
  let newPoints = Array(pointArray.length);

  pointArray.forEach((point, index) => {
    let x = point.x + translationPoint.x;
    let y = point.y + translationPoint.y;
    let z = point.z + translationPoint.z;
    newPoints[index] = [x, y, z];
  });

  return newPoints;
}

/* Multiples a shapes dimensions by the x, y, and z values provided in the Point */
function transform(pointArray: Array<Point>, scalePoint: Point){
  let newPoints = Array(pointArray.length);

  pointArray.forEach((point, index) => {
    let x = point.x * scalePoint.x;
    let y = point.y * scalePoint.y;
    let z = point.z * scalePoint.z;
    newPoints[index] = [x, y, z];
  });

  return newPoints;
}