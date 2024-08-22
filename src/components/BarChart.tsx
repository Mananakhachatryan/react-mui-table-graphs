import React, { useMemo } from "react";
import { Container } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { IProduct } from "../context/product";

interface IProps {
  data: IProduct[];
}

type TChart = {
  date: string;
  total: number;
};

const BarCharts: React.FC<IProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const genData = [] as TChart[];

    for (const { out_of_service_date } of data) {
      const splittedDate = out_of_service_date.split("/");
      const monthDate = `${splittedDate[1]}/${splittedDate[2]}`;
      const itemIdx = genData.findIndex(({ date }) => date === monthDate);

      if (itemIdx > -1) {
        genData[itemIdx].total += 1;
      } else {
        genData.push({
          date: monthDate,
          total: 1,
        });
      }
    }

    return genData;
  }, [data]);

  console.log(chartData, "_chartData_");

  return (
    <Container>
      <BarChart
        dataset={chartData}
        series={[{ dataKey: "total", stack: "total" }]}
        xAxis={[{ scaleType: "band", dataKey: "date" }]}
        slotProps={{ legend: { hidden: true } }}
        height={650}
      />
    </Container>
  );
};

export default BarCharts;
