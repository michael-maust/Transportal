import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { IonSearchbar } from "@ionic/react";
import SearchResult from "../components/searchResult";

const TranpsortalMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2pzdHVja3kiLCJhIjoiY2xhMzlvcnhlMG94czNwbWhzN3Z3Z3V6cCJ9.FYRlIp7y4CKe7qhm66VsTQ';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [searchResultsForStart, setSearchResultsForStart] = useState([]);
    const [searchResultsForEnd, setSearchResultsForEnd] = useState([]);

    const handleSelectStart = (selectedResult) => {
        setStart(selectedResult);

        const start = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: selectedResult
                    }
                }
            ]
        };

        if (map.current.getLayer('start')) {
            map.current.getSource('start').setData(start);
        } else {
            map.current.addLayer({
                id: 'start',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: selectedResult
                                }
                            }
                        ]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#FFE5D9'
                }
            });
        }
    }

    const handleSelectEnd = (selectedResult) => {
        setEnd(selectedResult);

        const end = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: selectedResult
                    }
                }
            ]
        };

        if (map.current.getLayer('end')) {
            map.current.getSource('end').setData(end);
        } else {
            map.current.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: selectedResult
                                }
                            }
                        ]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#DF7A5E'
                }
            });
        }
    }

    const search = async (searchTerm, destinationSearch) => {
        const query = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY2pzdHVja3kiLCJhIjoiY2xhMzlvcnhlMG94czNwbWhzN3Z3Z3V6cCJ9.FYRlIp7y4CKe7qhm66VsTQ`,
            { method: 'GET' },
        );
        const json = await query.json();
        const data = json.features.map((place) => ({ name: place.place_name, coordinates: place.geometry.coordinates }));
        
        if (destinationSearch) {
            setSearchResultsForEnd(data);
        } else {
            setSearchResultsForStart(data);
        }
    }

    const getRoute = async () => {
        const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
            { method: 'GET' },
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route
            }
        };

        if (map.current.getSource('route')) {
            map.current.getSource('route').setData(geojson);
        }
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#DF7A5E',
                    'line-width': 5,
                }
            });
        }
    }

    const getZoomLevelForGeojsonArea = (lat_min, lat_max, lng_min, lng_max) => {

        let dx = Math.abs(lat_max-lat_min);
        let dy = Math.abs(lng_max-lng_min);
        let d = dy > dx ? dy : dx;
    
        //return zoomlevel
        switch(true) {
          case d>100 : return 4 ?? 0;
          case (d>75 && d<=100) : return 3.2;
          case (d>50 && d<=75) : return 3.4;
          case (d>40 && d<=50) : return 4.2;
          case (d>30 && d<=40) : return 4.4;
          case (d>20 && d<=30) : return 4.6;
          case (d>15 && d<=20) : return 4.7;
          case (d>10 && d<=15) : return 5.1;
          case (d>5 && d<=10) : return 5.7;
          case (d>2.5 && d<=5) : return 6.2;
          case (d>1 && d<=2.5) : return 6.8;
          case (d>0.5 && d<=1) : return 9;
          case (d>0.25 && d<=0.5) : return 10.2;
          case (d>0.125 && d<=0.25) : return 10.6;
          case (d>0.10 && d<=0.125) : return 11.2;
          case (d>0.01 && d<=0.10) : return 11.8;
          case (d>0.001 && d<=0.01) : return 12;
          default: return 13.6
        }
    
      }

    useEffect(() => {
        if (start && end) {
            getRoute();

            const avgLng = (start[0] + end[0]) / 2;
            const avgLat = (start[1] + end[1]) / 2;
            const difLng = Math.abs(start[0] - end[0]);
            const difLat = Math.abs(start[1] - end[1]);
            const largestDif = Math.max(difLat, difLng);
            
            if (map.current) {
                map.current.setCenter([avgLng, avgLat]);
                map.current.setZoom(getZoomLevelForGeojsonArea(
                    Math.min(start[1], end[1]),
                    Math.max(start[1], end[1]),
                    Math.min(start[0], end[0]),
                    Math.max(start[0], end[0])
                ));
            }
        }
    }, [start, end]);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/cjstucky/cla3wv21i000215pv75npbof0',
            center: [20, 90],
            zoom: 9
        });
    });

    return (
        <>
            <h1 className=" text-white m-5">Map</h1>
            <h3 className=" text-white m-5">Starting Location</h3>
            <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, false)} />
            <ul className=" absolute w-full bg-slate-800">
                {searchResultsForStart.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectStart} />)}
            </ul>
            <h3 className=" text-white m-5">Destination</h3>
            <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, true)} />
            <ul className=" absolute w-full bg-slate-800">
                {searchResultsForEnd.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectEnd} />)}
            </ul>
            <div ref={mapContainer} className="map-container" />
        </>
    )
}

export default TranpsortalMap;