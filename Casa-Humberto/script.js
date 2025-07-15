import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';

const base= 'images/';
const baseUrl= 'https://photo-sphere-viewer-data.netlify.app/assets/';
const caption = 'Casa Tio Humberto';

// const markerLighthouse = {
//     id: 'marker-1',
//     image: baseUrl + 'pictos/pin-red.png',
//     tooltip: 'Cape Florida Light, Key Biscayne',
//     size: { width: 32, height: 32 },
//     anchor: 'bottom center',
//     gps: [-80.155973, 25.666601, 29 + 3],
// };

const nodes = [
    {
        id: '1',
        panorama: base + 'imagen1.jpg',
        thumbnail: base + 'imagen1thumb.jpg',
        name: 'Entrada',
        caption: `Entrada principal - ${caption}`,
        links: [
            { 
                nodeId: '2',
                position: { textureX: 100, textureY: 10000 }, // <-- posición personalizada
            }],
        // markers: [markerLighthouse],
        //gps: [-81.156479, 25.666725, 3],
        sphereCorrection: { pan: '282deg' },
        defaultZoomLvl: 50, // nivel de zoom al iniciar

    },
    {
        id: '2',
        panorama: base + 'imagen3.jpg',
        thumbnail: base + 'imagen2thumb.jpg',
        name: 'Sala',
        caption: `Salón planta baja - ${caption}`,
        links: [
            { 
                nodeId: '1',
                position: { textureX: 1800, textureY: 10000 }, // <-- posición personalizada

            },
            { 
                nodeId: '3',
                position: { textureX: 7500, textureY: 10000 }, // <-- posición personalizada

            },
        ],
        // markers: [markerLighthouse],
        // gps: [-80.156168, 25.666623, 3],
        sphereCorrection: { pan: '320deg' },
    },
    {
        id: '3',
        panorama: base + 'imagen2.jpg',
        thumbnail: base + 'imagen3thumb.jpg',
        name: 'Cocina',
        caption: `Cocina - ${caption}`,
        links: [
            { 
                nodeId: '2',
                position: { textureX: 700, textureY: 10000 }, // <-- posición personalizada

            }, // <-- posición personalizada
            // { nodeId: '1'} // <-- posición personalizada
        ],
        sphereCorrection: { pan: '180deg' },
        // markers: [markerLighthouse],
        // gps: [-80.156168, 25.666623, 3],
        // sphereCorrection: { pan: '42deg' },
    },
    // {
    //     id: '3',
    //     panorama: baseUrl + 'tour/key-biscayne-3.jpg',
    //     thumbnail: baseUrl + 'tour/key-biscayne-3-thumb.jpg',
    //     name: 'Three',
    //     caption: `[3] ${caption}`,
    //     links: [{ nodeId: '4' }, { nodeId: '2' }, { nodeId: '5' }],
    //     gps: [-80.155932, 25.666498, 5],
    //     sphereCorrection: { pan: '50deg' },
    // },
    // {
    //     id: '4',
    //     panorama: baseUrl + 'tour/key-biscayne-4.jpg',
    //     thumbnail: baseUrl + 'tour/key-biscayne-4-thumb.jpg',
    //     name: 'Four',
    //     caption: `[4] ${caption}`,
    //     links: [{ nodeId: '3' }, { nodeId: '5' }],
    //     gps: [-80.156089, 25.666357, 3],
    //     sphereCorrection: { pan: '-78deg' },
    // },
    // {
    //     id: '5',
    //     panorama: baseUrl + 'tour/key-biscayne-5.jpg',
    //     thumbnail: baseUrl + 'tour/key-biscayne-5-thumb.jpg',
    //     name: 'Five',
    //     caption: `[5] ${caption}`,
    //     links: [{ nodeId: '6' }, { nodeId: '3' }, { nodeId: '4' }],
    //     gps: [-80.156292, 25.666446, 2],
    //     sphereCorrection: { pan: '170deg' },
    // },
    // {
    //     id: '6',
    //     panorama: baseUrl + 'tour/key-biscayne-6.jpg',
    //     thumbnail: baseUrl + 'tour/key-biscayne-6-thumb.jpg',
    //     name: 'Six',
    //     caption: `[6] ${caption}`,
    //     links: [{ nodeId: '5' }, { nodeId: '7' }],
    //     gps: [-80.156465, 25.666496, 2],
    //     sphereCorrection: { pan: '65deg' },
    // },
    // {
    //     id: '7',
    //     panorama: baseUrl + 'tour/key-biscayne-7.jpg',
    //     thumbnail: baseUrl + 'tour/key-biscayne-7-thumb.jpg',
    //     name: 'Seven',
    //     caption: `[7] ${caption}`,
    //     links: [{ nodeId: '6' }],
    //     gps: [-80.15707, 25.6665, 3],
    //     sphereCorrection: { pan: '110deg', pitch: -3 },
    // },
];

new Viewer({
    container: 'viewer',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: false,
    defaultYaw: '270deg',
    defaultZoomLvl: 10, // nivel de zoom al iniciar
    navbar: 'zoom move gallery caption fullscreen',

    plugins: [
        MarkersPlugin,
        [GalleryPlugin, {
            thumbnailSize: { width: 100, height: 100 },
        }],
        [VirtualTourPlugin, {
            positionMode: 'manual', // Cambiado a 'manual' para usar GPS
            // positionMode: 'gps', // Alternativamente, puedes usar 'gps' si prefieres
            renderMode: '3d',
            nodes: nodes,
            startNodeId: '1',
            
        }],
        [AutorotatePlugin, {
            autorotatePitch: '5deg',
            autorotateSpeed: '1rpm', // puedes ajustar la velocidad
            autostartDelay: 10000,    // tiempo en ms antes de empezar a rotar
            autorotateZoomLvl: 40, // nivel de zoom al iniciar la rotación
        }],
    ],
});
