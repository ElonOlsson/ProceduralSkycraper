function placeGeometries(nrOfGeometries, geometries){
    
    var totalBuildingHeight = 0;

    for( var i=0 ; i<nrOfGeometries ; ++i){
        if(i==0){   //foundation
            
            geometries[i][0].position.y = 0.5 * geometries[i][0].geometry.parameters.height * geometries[i][0].scale.y;
            totalBuildingHeight = geometries[i][0].position.y * 2;
        }
    
        else{                                                   // dont randomize in animate()
       
            geometries[i][0].position.y = 0.5*geometries[i][0].geometry.parameters.height * geometries[i][0].scale.y 
                                          + totalBuildingHeight;
    
            totalBuildingHeight += geometries[i][0].geometry.parameters.height * geometries[i][0].scale.y;
            if(geometries[i][2].zOffset){
                // geometries[i][0].position.z = -geometries[i][2].zOffsetPercent * geometries[i-1][1].width.value;
            }
           
            if(geometries[i][2].rotationRandomness < 15 && i%3 == 0){    // percent chanse
                    geometries[i][0].rotation.y = Math.PI/(4);  
            }
    
    
        }
    }
}









