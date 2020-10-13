import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet'

import '../styles/pages/orphanage-map.css';
import mapMarkerImg from '../images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map center={[-23.246012,-45.8846386]} zoom={15} style={{width:'100%', height: '100%'}}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link  to="" className="create-orphanage">
        <FiPlus color="#fff" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;