const selectedLegend = document.getElementById('selected-legend')

let legend = []

fetch('./legends.json')
  .then(response => response.json())
    .then(data => {
        legend = data
        console.log('Loaded legends:', data);

  })
  .catch(error => console.error('Error loading legends:', error));

function legendSelect() {
    let lastNumber = null
    return function numberSelect() {
        let selection 
        lastNumber = selection
        do {
            selection = Math.floor(Math.random() * legend.length)
        } while (selection === lastNumber && legend.length > 1)
        
        const selected = legend[selection]
        console.log(selected.name)
        displayLegend(selected)
        return selected
    }
}
    

function displayLegend(legend) {
   if (!legend) return
  selectedLegend.innerHTML = ''
  selectedLegend.className = 'list-item'

  const legendWrapper = document.createElement('div')
  legendWrapper.className = 'legend-wrap'

  const legendImg = document.createElement('div')
    legendImg.className = 'legend-img'
    
  const img = document.createElement('img')
  img.src = legend.image
  img.alt = legend.name
  legendImg.appendChild(img)

  const legendName = document.createElement('div')
  legendName.innerHTML = `<div class="legend-name">You have selected ${legend.name}</div>`

  legendWrapper.appendChild(legendImg)
  legendWrapper.appendChild(legendName)
  
  selectedLegend.appendChild(legendWrapper)

        
}

