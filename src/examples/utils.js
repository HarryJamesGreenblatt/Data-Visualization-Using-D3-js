export default function getRandomColor () {
    return (
        "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    )
}

export const worldPopulationsCsvDataUrl = 'https://raw.githubusercontent.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/main/src/data/import/world-populations.csv';


export const irisDatasetJsonUrl = 'https://gist.githubusercontent.com/lisawagner/f7cbb8bae9743cca9c12c7b9682adfee/raw/be92f9968fb97da543f3425652a7a128121d7b0b/iris_data.json'