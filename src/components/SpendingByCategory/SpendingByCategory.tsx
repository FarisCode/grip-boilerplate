import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./SpendingByCategory.module.scss";

const options: any = {
  chart: {
    type: "donut",
    events: {},
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: 18,
    width: "100%",
    height: 110,
    offsetY: 20,
    labels: {
      colors: ["#fff"],
    },
    markers: {
      radius: 5,
      width: 25,
      height: 25,
    },
  },
  colors: ["#FDCD55", "#FF934F", "#4378DB", "#28A164", "#FF715B"],
};

export type SpendingByCategoryProps = {
  data: Object;
};

export const SpendingByCategory: React.FC<SpendingByCategoryProps> = ({
  data,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [percVal, setPercVal] = useState("");
  const [dataPer, setDataPer] = useState<any>({});
  const [dislayValues, setDislayValues] = useState([]);
  const [dislayLabels, setDislayLabels] = useState([]);

  useEffect(() => {
    const keys: any = Object.keys(data);
    const values: any = Object.values(data);
    const sum: any = values.reduce((a: any, b: any) => a + b, 0);
    const tempObj: any = {};
    values.forEach((n: any, i: any) => {
      tempObj[keys[i]] = ((n / sum) * 100).toFixed(2);
    });
    setDislayValues(values);
    setDislayLabels(keys);
    setDataPer(tempObj);
  }, [data, setDataPer, setSelectedCategory, setDislayValues]);

  useEffect(() => {
    setPercVal(dataPer[selectedCategory]);
  }, [selectedCategory, setPercVal, dataPer]);

  options.labels = Object.keys(data);
  options.chart.events.click = (chartContext: any) => {
    setSelectedCategory((selectedCategory) => {
      const value =
        chartContext?.target?.parentElement?.attributes?.seriesName?.value;
      return value === selectedCategory ? "" : value ?? selectedCategory;
    });
  };

  return (
    <div className={styles.container} data-testid="SpendingByCategory">
      <div className={styles.label}>Spending by Category</div>
      <div className={styles.chartWrap}>
        <div className={styles.percValue}>{percVal ? percVal + "%" : ""}</div>
        <div id="chart" className={styles.chart}>
          <ReactApexChart
            options={options}
            series={dislayValues}
            type="donut"
          />
        </div>
      </div>
      <div className={styles.legends}>
        {dislayLabels.map((k, i) => (
          <div className={styles.legend}>
            <div
              style={{
                background: options.colors[i],
              }}
            ></div>
            <div>{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
