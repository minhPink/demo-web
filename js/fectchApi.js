export const fetchApi = async (api) => {
    const response = await fetch(api);
    const data = response.json();
    return data;
}