function ColorBar(value, area) {
    density = value / area / 10000;
    if (value == 0)
        return "white"
    else if (value <= 1)
        return "#87cefa"
    else if (value <= 4)
        return "#00bfff"
    else if (density <= 16)
        return "#00FF00"
    else if (density <= 32)
        return "#00CC00"
    else if (density <= 64)
        return "#FFFF00"
    else if (density <= 128)
        return "#ffd700"
    else if (density <= 256)
        return "#FF8C00"
    else if (density <= 512)
        return "#FF6600"
    else if (density <= 1024)
        return "#FF0000"
    else if (density <= 2048)
        return "#CC0000"
    else
        return "#a020f0"
    //return "rgb("+r+","+g+","+b+")";
}
