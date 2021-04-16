export const getMap = () => {
    const baseURL = 'https://geocode.arcgis.com/arcgis/rest/services/Speciality/MapServer/exportf=json&text=Sofia'

    return fetch(baseURL)
    
}