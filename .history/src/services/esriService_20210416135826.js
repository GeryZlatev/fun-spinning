export const getMap = () => {
    const baseURL = 'https://geocode.arcgis.com/arcgis/rest/services/Speciality/ESRI_StateMapServer/'

    return fetch(baseURL)
    
}