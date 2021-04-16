export const getMap = () => {
    const baseURL = 'https://arcgis.com/arcgis/rest/services/Speciality/ESRI_Sofia_BG/MapServer/'

    return fetch(baseURL)
    
}