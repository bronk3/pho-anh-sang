import React from 'react';

const Map = props => <div className="map"><MapPane {...props.data} /></div>;

export default Map;

class MapPane extends React.Component {
  componentWillMount() {
    if (document.getElementById('script_google_maps_api') === null) {
      const script = document.createElement('script');
      script.id = 'script_google_maps_api';
      script.async = true;
      script.defer = true;
      script.src= `https://maps.googleapis.com/maps/api/js?key=${this.props.api_key}&callback=googleMapListener.mapLoaded`;
      document.body.appendChild(script);
    }
  }

  componentDidMount() {
    window.googleMapListener.addEventListener('loaded', () => {
      const map = new window.google.maps.Map(this.mapElem, {
        zoom: this.props.zoom,
        center: this.props.location,
        disableDefaultUI: true,
        styles: MAP_STYLES
      });

      const icon = {
        url: this.props.marker_image,
        size: new window.google.maps.Size(50, 50),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(25, 50),
        scaledSize: new window.google.maps.Size(50,50)
      };

      new window.google.maps.Marker({
        position: this.props.location,
        map: map,
        icon: icon
      });
    });
  }

  render() {
    return (
      <div ref={map => { this.mapElem = map; }} className="map__pane"></div>
    );
  }
};

class GoogleMapListener {
  constructor() {
    this.loaded = false;
    this.listeners = [];
  }

  mapLoaded() {
    this.loaded = true;
    this.triggerEvent('loaded');
  }

  addEventListener(event, fn) {
    this.listeners.push({name: event, callback: fn});
    if (this.loaded && event === 'loaded') {
      fn();
    }
  }

  triggerEvent(event, data) {
    this.listeners
      .filter(listen => listen.name === event)
      .forEach(listen => listen.callback(data));
  }
}

window.googleMapListener = new GoogleMapListener();

const MAP_STYLES = [
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e9e9e9"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dedede"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#333333"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f2f2f2"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  }
];
