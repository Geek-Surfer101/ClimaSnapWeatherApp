/**
 * Updates the wind direction arrow and value in the DOM.
 * @param {number} windDeg - Wind direction in degrees
 */
export function updateWindDirection(windDeg) {
    const windDirValue = document.querySelector(".wind-dir-value")
    const windArrow = document.querySelector(".wind-arrow")
    if (windDirValue) windDirValue.textContent = windDeg + "°"
    if (windArrow) windArrow.style.transform = `rotate(${windDeg}deg)`
}
