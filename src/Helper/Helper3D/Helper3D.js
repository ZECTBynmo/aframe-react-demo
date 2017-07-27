import * as THREE from 'three';

/**
 * NOTE: This helper was a port of Three.js
 *
 * Aframe coordinate is the same as Three coordinate because it base on Threejs
 * https://msdn.microsoft.com/en-us/library/dn479430(v=vs.85).aspx
 */
export default class Helper3D {
  static deg2rad = Math.PI/180;
  static rad2deg = 180/Math.PI;
  
  static toDeg(rad) {
    return rad * this.rad2deg;
  }
  
  static toRad(deg) {
    return deg * this.deg2rad;
  }

  /**
   * Rotate a point some radian angles around the center of coordinate (O point)
   */
  static rotate2DByO = ({x, y}, a) => {
    const newX = x * Math.cos(a) - y * Math.sin(a);
    const newY = x * Math.sin(a) + y * Math.cos(a);
    
    return {newX, newY};
  }

  static rotate3D = (vector, axis, radAngle) => {
    var threeVector = new THREE.Vector3(vector[0], vector[1], vector[2]);
    var threeAxis = new THREE.Vector3(axis[0], axis[1], axis[2]);
    
    threeVector.applyAxisAngle(threeAxis, radAngle);
    
    return threeVector;
  }
}
