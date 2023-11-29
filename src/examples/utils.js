export default function getRandomColor () {
    return (
        "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    )
}

export const worldPopulationsCsvDataUrl = 'https://raw.githubusercontent.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/main/src/data/import/world-populations.csv';