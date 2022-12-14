function change(){
    
    var kvadrat = document.getElementById('kvadrat')
    
    var w        = document.getElementById('width').value
    var h        = document.getElementById('height').value
    var bg       = document.getElementById('bg').value
    var bgImg    = document.getElementById('bgImg').value
    
    var position = document.getElementById('position').value
    var top      = document.getElementById('top').value
    var left     = document.getElementById('left').value
    
    var brd = document.getElementById('border').value
    var bordColor = document.getElementById('bordercolor').value
    var bordpx= document.getElementById('bordercolr').value

    kvadrat.style.width = w
    kvadrat.style.height = h
    kvadrat.style.background = bg
    kvadrat.style.backgroundImage = 'url('+bgImg+')'

    kvadrat.style.position = position
    kvadrat.style.top = top
    kvadrat.style.left = left
    kvadrat.style.transition = "0.5s"
    
    kvadrat.style.border= brd
    kvadrat.style.borderColor= bordColor
    kvadrat.style.borderWidth= bordpx
}