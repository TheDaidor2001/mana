import { getStrapiUrl } from "./getStrapiUrl";

const qs = require("qs");

export async function fetchApi(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: { "Content-Type": "application/json" },
      ...options,
    };

    //build request URL
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, //pretify URL
    });

    const requestUrl = `${getStrapiUrl(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;
      
    const res = await fetch(requestUrl, mergedOptions)
    const data = await res.json()
      

    return data;
      
  } catch (error) {
    console.log(error);
    
    throw new Error(
      "Error al conectar la API, verifique los parametros y la información que se le está pasando"
    );
  }
}
