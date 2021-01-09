/* Given a point, length, and degree calculate the end point */
function calcEndpoint(point, radians, length){
  let x = point.x - Math.cos(radians) * length;
  let y = point.y - Math.sin(radians) * length;
  return { x: x, y: y };
}

/* Next two convert between radians and degrees */
function degreeToRadian(degree){
  return degree * (Math.PI / 180);
}

function radianToDegree(radian){
  return radian * (180/Math.PI);
}