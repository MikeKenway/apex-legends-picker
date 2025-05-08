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

  const wrapper = document.createElement('div')
  wrapper.className = 'legend-wrap'
  wrapper.innerHTML = `<p>${legend.name}</p>`

  const imgWrap = document.createElement('div')
    imgWrap.className = 'img-wrap'
    
  const img = document.createElement('img')
  img.src = legend.image
  img.alt = legend.name
  imgWrap.appendChild(img)

  selectedLegend.appendChild(wrapper)
  selectedLegend.appendChild(imgWrap)

        
}

/* 

<div class="img-wrap">
            <img
            src="${legend.image}"
            alt="${legend.name}">
        </div>
        <div class="name-wrap">
            <p>${legend.name}</p>
        </div>

*/