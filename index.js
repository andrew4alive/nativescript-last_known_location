import * as applicationModule from 'tns-core-modules/application';
export class Last_known_location {
  
  constructor() {
    this.activity = applicationModule.android.startActivity;
    this.msg= "I need these permissions location permission";
  }
  getlocation(callback, nopermission_callback,msg) {
    if (this.has_permission()) {
      this.getlocation_only(callback)
    }
    else {
      this.request_permission(callback, nopermission_callback)
    }
  }
  getlocation_only(callback) {
    var locationServices = com.google.android.gms.location.LocationServices;
    var context = this.activity;
    var locs = locationServices.getFusedLocationProviderClient(context);
    var last_loc = locs.getLastLocation();
    var sucesslistern = new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: location => { callback(location); }
    });

    last_loc.addOnSuccessListener(context, sucesslistern);
  }

  has_permission() {
    const permissions = require("nativescript-permissions");
    return permissions.hasPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION);
  }
  has_permission_fine() {
    const permissions = require("nativescript-permissions");
    return permissions.hasPermission(android.Manifest.permission.ACCESS_FINE_LOCATION);
  }
  request_permission(callback, nopermission_callback) {
    const permissions = require("nativescript-permissions");
    permissions
      .requestPermission(
        android.Manifest.permission.ACCESS_COARSE_LOCATION,
        this.msg
      )
      .then(() => {
       
        this.getlocation_only(callback);
      })
      .catch(() => {
        
        nopermission_callback();
      });
  }

}