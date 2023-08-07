'use client';
import "leaflet/dist/leaflet.css"
import change_icon from "../../../public/icons/circle_left.png"
import layer_icon from "../../../public/icons/layers.png"
import Image from "next/image";
import { useState, useRef } from "react"
import { districts } from "./Geojsons"
import { MapContainer, TileLayer, GeoJSON, ZoomControl,  } from "react-leaflet";
import { LatLng, LatLngBounds, Map as LeafletMap,  } from "leaflet";

export default function Map() {

  const mapRef = useRef<LeafletMap>(null);

  const southWest = new LatLng(36.672811, 67.335296);
  const northEast = new LatLng(40.000000, 75.150703);
  const bounds = new LatLngBounds(southWest, northEast);

  const [orthphoto, setOrthphoto] = useState(true);
  const [zooming, setZooming] = useState(8);

  const [styleG, setStyleG] = useState();
  const [fitBoundsV, setFitBoundsV] = useState(bounds)



  const zoom = zooming;


  const handleGeoJSONClick = (feature: any, layer: any) => {
    if (feature?.properties?.region === 4) {
      layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        click: () => {
          if(mapRef.current)
          mapRef.current.fitBounds(layer.getBounds());
        },
        mouseover: undefined,
        mouseout: undefined
      });
    }

  };

  return (

  
    
    <MapContainer

      ref={mapRef}
      id="map-gbao"
      className = "h-full w-[800px] max-w-full rounded-[30px] relative"
      center = {[36.861034, 72.276093]}
      zoom = {zoom}
      // scrollWheelZoom = {false}
      zoomControl = {false}
      maxBounds = {bounds}
      minZoom = {8}
    >


      <ZoomControl position="bottomright" />
        
      
      {orthphoto?<TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF6YXJraHVkb2V2IiwiYSI6ImNsampzeGx2NTBjYmMzbXFxaDBzeXEzcW8ifQ.TIi2ZR3-Vjj8mGghyIGchA"
        id='mapbox/satellite-streets-v12'
        attribution='Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />: <TileLayer
        url="https://tile.openstreetmap.org-/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        opacity={0.8}
        
      />
      }
      
      <GeoJSON
        style={(feature) => {
          return {
            fillColor: feature?.properties.color,
            weight: orthphoto?5:2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: orthphoto?0.2:0.7,
          }
        }
      }
        data={districts}
        onEachFeature={handleGeoJSONClick}

      />

      <div className="flex flex-col text-lg justify-end absolute right-[10px] bottom-[120px] z-[1000] gap-1" >
          
        <button className="w-[40px] bg-[white] px-2 py-2  rounded-[10px]" onClick={() => {setOrthphoto(!orthphoto)}}>
          <Image className="h-[100%] w-[100%]" src={layer_icon} alt="Picture of the author" />
        </button>
        <button className="w-[40px] bg-[white] px-2 py-2  rounded-[10px]" onClick={()=>{ setZooming(8)}}>
          <Image className="h-[100%] w-[100%]" src={change_icon} alt="Picture of the author" />
        </button>

      </div>

    </MapContainer>
  );




}



// onEachFeature={(feature, layer) => {
//   if (feature.properties.region === 4) {
//     layer.on({
//       mouseover: (e) => { var layer = e.target;
//         layer.setStyle({
//           weight: 2,
//           color: "#666",
//           dashArray: "",
//           fillOpacity: 0.9,
//         });},
//       mouseout: (e) => {
//         var layer = e.target;

//         layer.setStyle({
//           weight: 1,
//           color: "#666",
//           dashArray: "",
//           fillOpacity: 0.7,
//         });
      
//         // resetStyle(layer);
//       },
//       click: {(e) => {
//         map.fitBounds(e.target.getBounds());
//       }},
//     });
//   }
// }}