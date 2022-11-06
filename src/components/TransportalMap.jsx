import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { IonSearchbar, IonModal, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent} from "@ionic/react";
import SearchResult from "./SearchResult";
import './TransportalMap.css';

const TranpsortalMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2pzdHVja3kiLCJhIjoiY2xhMzlvcnhlMG94czNwbWhzN3Z3Z3V6cCJ9.FYRlIp7y4CKe7qhm66VsTQ';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const startSearchModal = useRef(null);
    const [startSearchOpen, setStartSearchOpen] = useState(false);
    const destinationSearchModal = useRef(null);
    const [destinationSearchOpen, setDestinationSearchOpen] = useState(false);
    const [start, setStart] = useState(null);
    const [destination, setDestination] = useState(null);
    const [startName, setStartName] = useState('');
    const [destinationName, setDestinationName] = useState('');
    const [searchResultsForStart, setSearchResultsForStart] = useState([]);
    const [searchResultsForDestination, setSearchResultsForDestination] = useState([]);

    const onWillDismissStartSearch = () => {
        setStartSearchOpen(false);
    }

    const onWillDismissDestinationSearch = () => {
        setDestinationSearchOpen(false);
    }

    const handleSelectStart = (selectedResult) => {
        const { name, coordinates: coords } = selectedResult;
        setStart(coords);
        setStartName(name);

        const start = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: coords
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
                                    coordinates: coords
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

        onWillDismissStartSearch();
    }

    const handleSelectDestination = (selectedResult) => {
        const { name, coordinates: coords } = selectedResult;
        setDestination(coords);
        setDestinationName(name);

        const destination = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: coords
                    }
                }
            ]
        };

        if (map.current.getLayer('destination')) {
            map.current.getSource('destination').setData(destination);
        } else {
            map.current.addLayer({
                id: 'destination',
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
                                    coordinates: coords
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

        onWillDismissDestinationSearch();
    }

    const search = async (searchTerm, destinationSearch) => {
        const query = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY2pzdHVja3kiLCJhIjoiY2xhMzlvcnhlMG94czNwbWhzN3Z3Z3V6cCJ9.FYRlIp7y4CKe7qhm66VsTQ`,
            { method: 'GET' },
        );
        const json = await query.json();
        const data = json.features.map((place) => ({ name: place.place_name, coordinates: place.geometry.coordinates }));

        if (destinationSearch) {
            setSearchResultsForDestination(data);
        } else {
            setSearchResultsForStart(data);
        }
    }

    const getRoute = async () => {
        const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
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
          case (d>75 && d<=100) : return 2.2;
          case (d>50 && d<=75) : return 2.4;
          case (d>40 && d<=50) : return 3.2;
          case (d>30 && d<=40) : return 3.4;
          case (d>20 && d<=30) : return 3.6;
          case (d>15 && d<=20) : return 4.7;
          case (d>10 && d<=15) : return 4.1;
          case (d>5 && d<=10) : return 4.7;
          case (d>2.5 && d<=5) : return 5.2;
          case (d>1 && d<=2.5) : return 6.8;
          case (d>0.5 && d<=1) : return 7;
          case (d>0.25 && d<=0.5) : return 9.2;
          case (d>0.125 && d<=0.25) : return 9.6;
          case (d>0.10 && d<=0.125) : return 10.2;
          case (d>0.01 && d<=0.10) : return 10.8;
          case (d>0.001 && d<=0.01) : return 11;
          default: return 12.6
        }
    
      }

    useEffect(() => {
        setSearchResultsForDestination([]);
        setSearchResultsForStart([]);

        if (start && destination) {
            getRoute();

            const avgLng = (start[0] + destination[0]) / 2;
            const avgLat = (start[1] + destination[1]) / 2;
            const difLng = Math.abs(start[0] - destination[0]);
            const difLat = Math.abs(start[1] - destination[1]);
            const largestDif = Math.max(difLat, difLng);
            
            if (map.current) {
                map.current.setCenter([avgLng, avgLat]);
                map.current.setZoom(getZoomLevelForGeojsonArea(
                    Math.min(start[1], destination[1]),
                    Math.max(start[1], destination[1]),
                    Math.min(start[0], destination[0]),
                    Math.max(start[0], destination[0])
                ));
            }
        }
    }, [start, destination]);

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
        <div>
            {/* <h3 className="subtitle">Starting Location</h3>
            <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, false)} />
            <ul className="searchResults">
                {searchResultsForStart.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectStart} />)}
            </ul>
            <h3 className=" text-white m-5">Destination</h3>
            <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, true)} />
            <ul className=" absolute w-full bg-slate-800">
                {searchResultsForEnd.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectEnd} />)}
            </ul> */}

            <IonButton onClick={() => setStartSearchOpen(true)} expand="block">Select Starting Location</IonButton>
            <p>Current Starting Location:</p>
            <p>{startName}</p>
            <IonModal ref={startSearchModal} isOpen={startSearchOpen} onWillDismiss={(ev) => onWillDismissStartSearch(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => startSearchModal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Select Starting Location</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, false)} />
                    <ul className="searchResults">
                        {searchResultsForStart.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectStart} />)}
                    </ul>
                </IonContent>
            </IonModal>
            <IonButton onClick={() => setDestinationSearchOpen(true)} expand="block">Select Destination</IonButton>
            <p>Current Destination:</p>
            <p>{destinationName}</p>
            <IonModal ref={destinationSearchModal} isOpen={destinationSearchOpen} onWillDismiss={(ev) => onWillDismissDestinationSearch(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => destinationSearchModal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Select Destination</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonSearchbar animated={true} onIonChange={(event) => search(event.target.value, true)} />
                    <ul className=" absolute w-full bg-slate-800">
                        {searchResultsForDestination.map(place => <SearchResult key={place.name} place={place} setLocation={handleSelectDestination} />)}
                    </ul>
                </IonContent>
            </IonModal>

            <div ref={mapContainer} style={{height: '400px'}} />
        </div>
    )
}

export default TranpsortalMap;