import React from 'react'

import { ComposableMap, Geographies, Geography,Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const statesList = [
  { name: "Alabama", abbr: "AL" },
  { name: "Alaska", abbr: "AK" },
  { name: "Arizona", abbr: "AZ" },
  { name: "Arkansas", abbr: "AR" },
  { name: "California", abbr: "CA" },
  { name: "Colorado", abbr: "CO" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Delaware", abbr: "DE" },
  { name: "Florida", abbr: "FL" },
  { name: "Georgia", abbr: "GA" },
  { name: "Hawaii", abbr: "HI" },
  { name: "Idaho", abbr: "ID" },
  { name: "Illinois", abbr: "IL" },
  { name: "Indiana", abbr: "IN" },
  { name: "Iowa", abbr: "IA" },
  { name: "Kansas", abbr: "KS" },
  { name: "Kentucky", abbr: "KY" },
  { name: "Louisiana", abbr: "LA" },
  { name: "Maine", abbr: "ME" },
  { name: "Maryland", abbr: "MD" },
  { name: "Massachusetts", abbr: "MA" },
  { name: "Michigan", abbr: "MI" },
  { name: "Minnesota", abbr: "MN" },
  { name: "Mississippi", abbr: "MS" },
  { name: "Missouri", abbr: "MO" },
  { name: "Montana", abbr: "MT" },
  { name: "Nebraska", abbr: "NE" },
  { name: "Nevada", abbr: "NV" },
  { name: "New Hampshire", abbr: "NH" },
  { name: "New Jersey", abbr: "NJ" },
  { name: "New Mexico", abbr: "NM" },
  { name: "New York", abbr: "NY" },
  { name: "North Carolina", abbr: "NC" },
  { name: "North Dakota", abbr: "ND" },
  { name: "Ohio", abbr: "OH" },
  { name: "Oklahoma", abbr: "OK" },
  { name: "Oregon", abbr: "OR" },
  { name: "Pennsylvania", abbr: "PA" },
  { name: "Rhode Island", abbr: "RI" },
  { name: "South Carolina", abbr: "SC" },
  { name: "South Dakota", abbr: "SD" },
  { name: "Tennessee", abbr: "TN" },
  { name: "Texas", abbr: "TX" },
  { name: "Utah", abbr: "UT" },
  { name: "Vermont", abbr: "VT" },
  { name: "Virginia", abbr: "VA" },
  { name: "Washington", abbr: "WA" },
  { name: "West Virginia", abbr: "WV" },
  { name: "Wisconsin", abbr: "WI" },
  { name: "Wyoming", abbr: "WY" },
];

const ServingStates = () => {
     const handleStateClick = (geo) => {
    alert(`Clicked on ${geo.properties.name}`);
    // Here you can redirect to state-specific service page
    // window.location.href = `/services/${geo.properties.name.toLowerCase()}`;
  };

  return (
    <div>
         <section className="py-16 bg-gradient-to-b from-green-50 to-green-50">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
                  We Serve All Across the <span className="text-green-600">United States</span>
                </h2>
        
                <div className="grid md:grid-cols-2 gap-10 items-center">
               
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
                    {statesList.map((state, idx) => (
                      <span
                        key={idx}
                        className="hover:shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 hover:text-white transition cursor-pointer"
                      >
                        {state.name} ({state.abbr})
                      </span>
                    ))}
                  </div>
        
        
                  <div className="w-full flex justify-center">
                    <ComposableMap projection="geoAlbersUsa" className="w-full max-w-xl">
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const centroid = geoCentroid(geo);
                            const state = statesList.find(
                              (s) => s.name === geo.properties.name
                            );
        
                            return (
                              <g key={geo.rsmKey}>
                                <Geography
                                  geography={geo}
                                  onClick={() => handleStateClick(geo)}
                                  style={{
                                    default: { fill: "#8b5cf6", outline: "none" }, 
                                    hover: { fill: "#2563eb", outline: "none" }, 
                                    pressed: { fill: "#1e40af", outline: "none" },
                                  }}
                                />
                                {centroid[0] && centroid[1] && state && (
                                  <Marker coordinates={centroid}>
                                    <text
                                      y={2}
                                      textAnchor="middle"
                                      style={{ fontFamily: "Arial", fontSize: 10, fill: "#fff", fontWeight: "bold" }}
                                    >
                                      {state.abbr}
                                    </text>
                                  </Marker>
                                )}
                              </g>
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                </div>
        
              
                <div className="hidden">
                  {statesList.map((state, idx) => (
                    <span key={idx} data-state={state.name}></span>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}

export default ServingStates