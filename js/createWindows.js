function createWindows(geometry) { 
/* geometry :
 * [0]: boxMesh = THREE.Mesh (with MeshPhongMaterial)
 * [1]: sizes = {height:vaule:, width:value}
 * [2]: randomnessData = {zOffset: (bool), zOffsetPercent: (double)}
 */

var geometryPositionY = geometry[0].position.y;

var windows = { 
   height: 1.2 * (geometry[0].geometry.parameters.height / geometry[1].height.value), //geometry[0].geometry.parameters.height,
   width: 0.7 * (geometry[0].geometry.parameters.width / geometry[1].width.value)
}

var nrOfWindows = {
   numberOfFloors: Math.floor(geometry[0].geometry.parameters.height/ windows.height),
   numberOfColumns: Math.floor(geometry[0].geometry.parameters.width / windows.width)
}

var totalNumberOfWindows = nrOfWindows.numberOfFloors * nrOfWindows.numberOfColumns;
// example: block: 5, window height 2, nrOfFloors 2; margin = (5-(2*2))/(2+1) = 1/3
var heightMargin = (geometry[0].geometry.parameters.height - (windows.height*nrOfWindows.numberOfFloors)) / (nrOfWindows.numberOfFloors +1);  
var widthMargin =  (geometry[0].geometry.parameters.width  - (windows.width*nrOfWindows.numberOfColumns)) / (nrOfWindows.numberOfColumns +1);  

if(heightMargin < 1){
   nrOfWindows.numberOfFloors -= 1;
   heightMargin = (geometry[0].geometry.parameters.height - (windows.height*nrOfWindows.numberOfFloors)) / (nrOfWindows.numberOfFloors +1);  
}
if(widthMargin < 1){
   nrOfWindows.numberOfColumns -=1;
   widthMargin = (geometry[0].geometry.parameters.width  - (windows.width*nrOfWindows.numberOfColumns)) / (nrOfWindows.numberOfColumns +1);
}

 // POSITIONS OF SIDES (Local coordinates (does not work on rotated boxes))
 // y is height
 // going counter clockwise (seen from above)
 // side a
var a = {
   a1: {
      x: geometry[0].geometry.parameters.width/2,
      y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
      z: geometry[0].geometry.parameters.width/2
   },
   // a2: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // a3: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // a4: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: geometry[0].geometry.parameters.width/2
   // }
}
 // side b
 var b = {
   b1: {
      x: geometry[0].geometry.parameters.width/2,
      y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
      z: -geometry[0].geometry.parameters.width/2
   },
   // b2: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // b3: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // b4: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: geometry[0].geometry.parameters.width/2
   // }
}

 // side c
 var c = {
   c1: {
      x: - geometry[0].geometry.parameters.width/2,
      y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
      z: - geometry[0].geometry.parameters.width/2
   },
   // c2: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // c3: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // c4: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: geometry[0].geometry.parameters.width/2
   // }
}

 // side d
 var d = {

   d1: {
      x: - geometry[0].geometry.parameters.width/2,
      y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
      z: geometry[0].geometry.parameters.width/2
   },
   // d2: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // d3: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: - geometry[0].geometry.parameters.width/2
   // },
   // d4: {
   //    x: geometry[0].geometry.parameters.width/2,
   //    y: - geometry[0].geometry.parameters.height/2 + geometryPositionY,
   //    z: geometry[0].geometry.parameters.width/2
   // }
}

var oneSideWindows = [];

// full coverage
// var coverage = 100;

// medium coverage
var coverage = 80;

// low coverage
// var coverage = 50;

// very low coverage
// var coverage = 10;

   for(var s=0 ; s<4 ; ++s){ // s for side
      for(var i=1 ; i<=nrOfWindows.numberOfFloors ; ++i){
   
         var windowCoverageRow = Math.floor(Math.random() * 101);
            for(var j=1 ; j<=nrOfWindows.numberOfColumns ; ++j){
   
               var windowCoverageColumn = Math.floor(Math.random() * 101);
                        
               // var windowColor = randomizeWindowColor();
            
               var winGeo = new THREE.PlaneGeometry( windows.width, windows.height);
               var winMaterial = new THREE.MeshBasicMaterial( {color: 0xFFEECC, side: THREE.DoubleSide} );
               winMaterial.polygonOffset = true;
               winMaterial.polygonOffsetFactor = -1;   // negativ?
            
               if(windowCoverageColumn > coverage || windowCoverageRow >coverage) 
                  winMaterial.color.setHex( 0x333333 );  // dark gray. Lights off
   
               var win = new THREE.Mesh( winGeo, winMaterial );
                     
               //  win.position =
               switch(s){
                  case 0:
                  
                     win.position.x = a.a1.x;
                     win.position.y = a.a1.y;
                     win.position.z = a.a1.z;
                     
                     win.position.x -= (j*widthMargin + (j-1)*windows.width + windows.width/2);
                     win.position.y -= (i*heightMargin + (i-1)*windows.height + windows.height/2);
                  break;
                  case 1:
            
                     win.rotation.y = Math.PI/2;
                     
                     win.position.x = b.b1.x;
                     win.position.y = b.b1.y;
                     win.position.z = b.b1.z;
                     
                     win.position.z += (j*widthMargin + (j-1)*windows.width + windows.width/2);
                     win.position.y -= (i*heightMargin + (i-1)*windows.height + windows.height/2);
                  break;
                  case 2:
            
                     win.position.x = c.c1.x;
                     win.position.y = c.c1.y;
                     win.position.z = c.c1.z;
                     
                     win.position.x += (j*widthMargin + (j-1)*windows.width + windows.width/2);
                     win.position.y -= (i*heightMargin + (i-1)*windows.height + windows.height/2);
                  break;
                  case 3:
            
                     win.rotation.y = Math.PI/2;
            
                     win.position.x = d.d1.x;
                     win.position.y = d.d1.y;
                     win.position.z = d.d1.z;
                     
                     win.position.z -= (j*widthMargin + (j-1)*windows.width + windows.width/2);
                     win.position.y -= (i*heightMargin + (i-1)*windows.height + windows.height/2);
                  break;
            
               } 
         
            oneSideWindows.push(win); 
            scene.add(win);
      
         }
      }
   }
   
return oneSideWindows;
};

// function randomizeWindowColor(){

//    var r = Math.floor(Math.random() * (10));
//    var g = Math.floor(Math.random() * (10));
//    var b = Math.floor(Math.random() * (10));


//    return ""+r+r+g+g+b+b;
// }
