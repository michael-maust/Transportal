import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

const TranpsortalMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2pzdHVja3kiLCJhIjoiY2xhMzlvcnhlMG94czNwbWhzN3Z3Z3V6cCJ9.FYRlIp7y4CKe7qhm66VsTQ';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [start, setStart] = useState([-92.33530214594644, 38.952768540453974]);
    const [end, setEnd] = useState([-92.34723513369339, 38.922793530041496]);

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
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
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
                map.current.setZoom(1 / (3 * largestDif));
            }
        }
    }, [start, end])

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [20, 90],
            zoom: 9
        });
    });

    return (
        <>
            <h1>Map</h1>
            <div ref={mapContainer} className="map-container" />
        </>
    )
}

export default TranpsortalMap;