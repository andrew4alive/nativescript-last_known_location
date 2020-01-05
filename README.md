# nativescript-last_known_location
    import { Last_known_location } from "nativescript-last_known_location";
    import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
    const applicationModule = require("tns-core-modules/application");
    function getlastlocation(){
        if( !isAndroid ) return ;
        const get_last_location_class=Last_known_location;
        var get_last_location = new get_last_location_class();
      //optional  get_last_location.msg="messagew when request location permission"
        get_last_location.getlocation(
            location=>{
              console.log("least known location latutide:longitude"+location.getLatitude()+","+location.getLongitude());
            },
            ()=>{ console.log("no permission");})
    }
## (Optional) Prerequisites / Requirements

npm and nativescript install

## Installation



```javascript
tns plugin add nativescript-last_known_location
```

## Usage 



## API


## License

Apache License Version 2.0, January 2004
