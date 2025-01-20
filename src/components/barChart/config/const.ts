import { BarLegendProps } from "@nivo/bar";
import { IThemeColorTokens } from "../../../globalTypes";
import { TDefsProps } from "../barChart.types";

export const barTheme = (colors: IThemeColorTokens) => ({
  axis: {
    domain: {
      line: {
        stroke: colors.grey[100],
      },
    },
    legend: {
      text: {
        fill: colors.grey[100],
      },
    },
    ticks: {
      line: {
        stroke: colors.grey[100],
        strokeWidth: 1,
      },
      text: {
        fill: colors.grey[100],
      },
    },
  },
  legends: {
    text: {
      fill: colors.grey[100],
    },
  },
});

export const barLegends: BarLegendProps[] = [
  {
    dataFrom: "keys",
    anchor: "bottom-right",
    direction: "column",
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
];

export const barDefs: TDefsProps[] = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "#38bcb2",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "#eed312",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
];
