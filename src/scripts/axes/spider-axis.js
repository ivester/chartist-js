/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function SpiderAxis(axisUnit, data, chartRect, options) {
    Chartist.SpiderAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    this.stepLength = this.axisLength / (options.ticks.length - (options.stretch ? 1 : 0));
  }

  function projectValue(value, index) {
    var maxLengthHorizontally = (this.chartRect.x2 - this.chartRect.x1) / 2;
    var maxLengthVertically = (this.chartRect.y1 - this.chartRect.y2) / 2;

    var maxLength = maxLengthHorizontally > maxLengthVertically ? maxLengthVertically : maxLengthHorizontally;

    var horizontalCenter =  this.chartRect.x1 + maxLengthHorizontally;
    var verticalCenter = this.chartRect.y2 + maxLengthVertically;

    var angle = 360 / this.ticks.length * index;

    var position = {};

    //TODO Find max value and do math to have the real factor to not use 20
    position.x = horizontalCenter + (value.y * 20 * Math.cos(angle * (Math.PI / 180)));
    position.y = verticalCenter - (value.y * 20 * Math.sin(angle * (Math.PI / 180)));

    return {
      x:position.x,
      y:position.y
    };

  }

  Chartist.SpiderAxis = Chartist.Axis.extend({
    constructor: SpiderAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));