import React from 'react'
import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

export default function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Marabá</strong>
                    <span>Pará</span>
                </footer>
            </aside>
            
            <Map
                center={[-5.3318968,-49.0964742]}
                zoom={16}
                style={{ width:'100%', height:'100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}