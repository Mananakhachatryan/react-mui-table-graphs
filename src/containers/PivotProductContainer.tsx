import React, { useEffect, useMemo } from "react";
import { Container } from "@mui/material";
import { ProductContext } from "../context/productContext";
import { getProductsAction } from "../context/productAction";
import PivotTable from "../components/PivotTable";

const PivotProductContainer: React.FC = () => {
  const { dispatch, state } = React.useContext(ProductContext);

  useEffect(() => {
    getProductsAction(dispatch, {});
  }, [dispatch]);

  const getWeekNumber = (date: string): number => {
    const d = new Date(date);

    d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
    const weekOne = new Date(d.getFullYear(), 0, 4);
    const weekNumber = Math.ceil(
      ((d.getTime() - weekOne.getTime()) / 86400000 + 1) / 7
    );

    return weekNumber;
  };

  const data = useMemo(() => {
    const products = state.products.data.map((product, idx) => {
      const date = new Date(product.data_source_modified_dt);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const week = getWeekNumber(product.data_source_modified_dt);

      return {
        date: `${year}/${month}/${week}`,
        id: `${idx}`,
        created_dt: product.created_dt,
        credit_score: product.credit_score,
        dba_name: product.dba_name,
        drivers: product.drivers,
        duns_number: product.duns_number,
        entity_type: product.entity_type,
        legal_name: product.legal_name,
        mailing_address: product.mailing_address,
        mc_mx_ff_number: product.mc_mx_ff_number,
        mcs_150_form_date: product.mcs_150_form_date,
        mcs_150_mileage_year: product.mcs_150_mileage_year,
        operating_status: product.operating_status,
        out_of_service_date: product.out_of_service_date,
        phone: product.phone,
        physical_address: product.physical_address,
        power_units: product.power_units,
        record_status: product.record_status,
        state_carrier_id_number: product.state_carrier_id_number,
        usdot_number: product.usdot_number,
        m_city: product.m_city,
        m_state: product.m_state,
        m_zip_code: product.m_zip_code,
      };
    });

    return {
      columns: [
        { field: "date", headerName: "Date", width: 200 },
        { field: "created_dt", headerName: "Created Date", width: 200 },
        { field: "credit_score", headerName: "Credit Score", width: 200 },
        { field: "dba_name", headerName: "DBA Name", width: 200 },
        { field: "drivers", headerName: "Drivers", width: 200 },
        { field: "duns_number", headerName: "DUNS Number", width: 200 },
        { field: "entity_type", headerName: "Entity Type", width: 200 },
        { field: "legal_name", headerName: "Legal Name", width: 200 },
        { field: "mailing_address", headerName: "Mailing Address", width: 200 },
        { field: "mc_mx_ff_number", headerName: "MC/MX/FF Number", width: 200 },
        {
          field: "mcs_150_form_date",
          headerName: "MCS 150 Form Date",
          width: 200,
        },
        {
          field: "mcs_150_mileage_year",
          headerName: "MCS 150 Mileage Year",
          width: 200,
        },
        {
          field: "operating_status",
          headerName: "Operating Status",
          width: 200,
        },
        {
          field: "out_of_service_date",
          headerName: "Out of Service Date",
          width: 200,
        },
        { field: "phone", headerName: "Phone", width: 200 },
        {
          field: "physical_address",
          headerName: "Physical Address",
          width: 200,
        },
        { field: "power_units", headerName: "Power Units", width: 200 },
        { field: "record_status", headerName: "Record Status", width: 200 },
        {
          field: "state_carrier_id_number",
          headerName: "State Carrier ID Number",
          width: 200,
        },
        { field: "usdot_number", headerName: "USDOT Number", width: 200 },
        { field: "m_city", headerName: "City", width: 200 },
        { field: "m_state", headerName: "State", width: 200 },
        { field: "m_zip_code", headerName: "Zip Code", width: 200 },
      ],
      rows: products.slice(1, 1000),
    };
  }, [state.products.data]);

  return (
    <Container>
      {state.products.data.length > 0 ? (
        <>
          <PivotTable data={data} />
        </>
      ) : (
        <p>loader</p>
      )}
    </Container>
  );
};

export default PivotProductContainer;
