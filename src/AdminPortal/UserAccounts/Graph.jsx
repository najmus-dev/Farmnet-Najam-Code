import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";

const Graph = () => {
  const chartRef = useRef(null);
  const [greenBarPosition, setGreenBarPosition] = useState(null);

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: [
      {
        // Legend for "Production (t)"
        data: [
          {
            name: "Production (t)",
            icon: "rect",
          },
        ],
        show: true,
        orient: "horizontal",
        left: "center",
        bottom: -14,
        textStyle: {
          color: "#114918",
          fontSize: 16,
          fontWeight: "bold",
        },
        itemGap: 30,
        itemWidth: 25,
        itemHeight: 20,
        padding: [20, 20, 20, 20],
        itemStyle: {
          color: "#114918",
        },

        left: "45%",
      },
      {
        // Legend for "Farmers (%)"
        data: [
          {
            name: "Farmers (%)",
            icon: "rect",
          },
        ],
        show: true,
        orient: "horizontal",
        left: "5%",
        bottom: -14,
        align: "left",
        textStyle: {
          color: "#83C543",
          fontSize: 16,
          fontWeight: "bold",
        },
        itemGap: 30,
        itemWidth: 25,
        itemHeight: 20,
        padding: [20, 20, 20, 20],
        itemStyle: {
          color: "#83C543",
        },
        left: "2%",
      },
    ],
    grid: {
      left: "2%",
      right: "2%",
      bottom: "15%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
        color: "#000",
        fontSize: 14,
        fontWeight: "normal",
        margin: 10,
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      {
        type: "value",
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Production (t)",
        type: "bar",
        data: [
          30000, 20000, 15000, 28000, 24000, 20000, 16000, 27680, 26000, 25500,
        ],
        barWidth: "85%",
        barCategoryGap: "50%",
        itemStyle: {
          color: (params) => (params.dataIndex === 7 ? "#114918" : "#D9D9D9"),
          borderRadius: [5, 5, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: "#1B5E20",
          },
        },
        label: {
          show: true,
          position: "insideBottom",
          distance: 8,
          formatter: (params) => {
            const percentages = [23, 22, 24, 21, 22, 23, 22, 21, 22, 22];
            return `${percentages[params.dataIndex]}%`;
          },
          fontSize: 12,
          color: "#000",
          fontWeight: "semibold",
        },
      },
      {
        name: "Farmers (%)",
        type: "line",
        yAxisIndex: 1,
        data: [23, 10, 10, 15, 14, 12, 14, 16, 14, 23],
        smooth: false,
        lineStyle: {
          color: "#83C543",
          width: 4,
        },
        symbol: "Dashed",
        itemStyle: {
          color: "#83C543",
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
  };

  const onChartReady = (chartInstance) => {
    const greenBarIndex = 7;
    const greenBarValue = 27680;

    // Get position of the green bar
    const greenBarCoord = chartInstance.convertToPixel({ seriesIndex: 0 }, [
      greenBarIndex,
      greenBarValue,
    ]);

    // Save the position for the overlay
    setGreenBarPosition(greenBarCoord);
  };

  return (
    <div className="relative ">
      <div className="bg-white flex items-center md:justify-start justify-center">
        <ReactECharts
          ref={chartRef}
          option={options}
          className="w-[100%] h-[250px] md:h-[330px] "
          onChartReady={onChartReady}
        />

        {/* Overlay for the styled text */}
        {greenBarPosition && (
          <div className="absolute md:left-[440px] top-[16px] md:-top-[10px]">
            {/* Button */}
            <div className="relative group flex items-center justify-center bg-[#114918] hover:bg-green-900 text-white mb-16 px-4 py-2 md:py-4 rounded-md max-w-xs md:max-w-md mx-auto h-[20px] md:h-[22px] md:w-[124px]">
              <p className="text-[14px] md:text-[20px] font-bold text-center">
                27,680
              </p>
              <div
                className="absolute bottom-0 left-1/2 transform translate-y-[98%] -translate-x-1/2 w-6 h-4 md:w-[30px]  md:h-[18px] bg-[#114918] group-hover:bg-green-900"
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph;
