<template>

    <div :id="chartId + '-box'">
    <h3>{{ title }}</h3>
      <canvas :id="chartId" class="chart"></canvas>
    </div>
 
</template>

<script>
import Chart from "chart.js/auto";
import GenerateInt from "../composables/randomInt";

export default {
  props: {
    title: String,
    chartId: String,
  },
  mounted() {
    const ctx = document.getElementById(this.chartId);
    ctx.style.width = "90%";
    ctx.style.height = "90%";
    ctx.width = ctx.offsetWidth;
    ctx.height = ctx.offsetHeight;

    var gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgb(130, 190, 245)");
    gradient.addColorStop(0.9595959595959596, "rgb(255, 255, 255)");
    gradient.addColorStop(1, "rgb(255, 255, 255)");

    let days = [];
    let views = [];
    for (let x = 0; x < 32; x++) {
      days.push(x);
      views.push(GenerateInt(0 + x + x, 100 - x));
    }

    const data = {
      labels: days,
      datasets: [
        {
          data: views,
          borderColor: "#2891f0",
          tension: 0.4,
          fill: true,
          backgroundColor: gradient,
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          xAxis: {
            grid: {
              display: false,
            },
          },
          yAxis: {
            grid: {
              display: false,
            },
          },
        },

        // datasetStrokeWidth: 5,
        scaleFontColor: "rgba(0,0,0,0)",
        scaleLineColor: "rgba(0,0,0,0)",
        scaleShowGridLines: true,
        datasetFill: true,
        borderWidth: 5,
        hoverRadius: 32,
        hoverBackgroundColor: "white",

        elements: {
          point: {
            radius: 0,
          },
        },

        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },

        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },

        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: false,
          },
        },
      },
    };

    new Chart(ctx, config);
  },
};
</script>

<style scoped lang="scss">
.chart {
  display: block;
  padding: 2vw;
    background-color: white; 
}
</style>
