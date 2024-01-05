export const apiGeneral = 'https://api.artic.edu/api/v1/artworks';

export const apiSerch = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number';

export const api = 'https://api.artic.edu/api/v1/artworks/?fields=id,title,image_id,description,date_display,place_of_origin,artist_title';

//export const apiImage = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
//You can paginate through results using page and limit params:
//https://api.artic.edu/api/v1/artworks?page=2&limit=100
//If you want to search and filter the results, you can do so via our search endpoints. For example, here is a full-text search (opens new window)for all artworks whose metadata contains some mention of cats:
//https://api.artic.edu/api/v1/artworks/search?q=cats

//For production use, we recommend using GET and passing the entire query as minified URL-encoded JSON via the params parameter. For example: