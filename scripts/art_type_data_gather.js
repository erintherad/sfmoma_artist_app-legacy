// import React from 'react';
//
// export default class Script extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//
//   render() {
//     return(
//       <div>{this.runScript()}</div>
//     )
//   }
//
//   runScript() {
//     fetch(`/api/collection/artworks/?date_display__gte=1975&date_display__lte=2000&department=Photography`)
//     .then(res => res.json())
//     .catch(e => e)
//     .then(res => console.log("75-00: " + res.count));
//     }
// }

// Architecture and Design

// 1900-1924: 68
// 1925-1949: 190
// 1950-1974: 1268
// 1975-2000: 3448

// fetch(`/api/collection/artworks/?date_display__gte=1900&date_display__lte=1924&department=Architecture and Design`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("00-24: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1925&date_display__lte=1949&department=Architecture and Design`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("25-49: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1950&date_display__lte=1974&department=Architecture and Design`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("50-74: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1975&date_display__lte=2000&department=Architecture and Design`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("75-00: " + res.count));
// }

// Painting and Sculpture

// 1900-1924: 316
// 1925-1949: 824
// 1950-1974: 2581
// 1975-2000: 2971

// fetch(`/api/collection/artworks/?date_display__gte=1900&date_display__lte=1924&department=Painting and Sculpture`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("00-24: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1925&date_display__lte=1949&department=Painting and Sculpture`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("25-49: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1950&date_display__lte=1974&department=Painting and Sculpture`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("50-74: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1975&date_display__lte=2000&department=Painting and Sculpture`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("75-00: " + res.count));
// }

// Photography

// 1900-1924: 640
// 1925-1949: 2444
// 1950-1974: 3326
// 1975-2000: 5116

// fetch(`/api/collection/artworks/?date_display__gte=1900&date_display__lte=1924&department=Photography`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("00-24: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1925&date_display__lte=1949&department=Photography`)
//   .then(res => res.json())
//   .catch(e => e)
//   .then(res => console.log("25-49: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1950&date_display__lte=1974&department=Photography`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("50-74: " + res.count));
// }
//
// fetch(`/api/collection/artworks/?date_display__gte=1975&date_display__lte=2000&department=Photography`)
// .then(res => res.json())
// .catch(e => e)
// .then(res => console.log("75-00: " + res.count));
// }
