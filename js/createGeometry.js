function createGeometry(i) { 
    
    var widthLoweringRate = 2.2;
    var heightLoweringRate = 1;
    
    var minHeight = 3;
    var maxHeight = 20;
    var minWidth = 5;
    var maxWidth = 15;

    var zOffsetRandomness = Math.floor(Math.random() * (40-1) + 1);  // percent
    
    var randomessData = {
        zOffset: zOffsetRandomness < 15 ? true : false,                 // should it be offseted in z?
        zOffsetPercent: Math.floor(Math.random() * (9-2) + 2)/10,       // how much should it offseted in percent ?           
        rotationRandomness:  Math.floor(Math.random() * (100-1) + 1)    // 0-100 % (more like a chance related to this box)
    };
    
    var sizes = {
        height:{value: Math.floor(Math.random()* ((+maxHeight-heightLoweringRate*i) - +minHeight)) + +minHeight},   
        width:{value:  Math.floor(Math.random()* ((+maxWidth-widthLoweringRate*i)   - +minWidth))  + +minWidth}
    }
    if(sizes.width.value < minWidth){
        sizes.width.value = minWidth;
    }
    if(sizes.height.value < minHeight){
        sizes.height.value = minHeight;
    }
    
    
    var box = new THREE.BoxGeometry(7.0*sizes.width.value, 10.0*sizes.height.value, 7.0*sizes.width.value);
    
    boxMaterial = new THREE.MeshPhongMaterial({
        color: 0x739c80
    });
    boxMesh = new THREE.Mesh(box, boxMaterial);
    scene.add(boxMesh);
    return [boxMesh, sizes, randomessData];

};