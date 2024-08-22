import React from "react";
import { Container } from "@mui/material";
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

interface IProps {
  data: any;
}

const PivotTable: React.FC<IProps> = ({ data }) => {
  const apiRef = useGridApiRef();
  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["date"],
      },
    },
  });

  const columns = [
    {
      field: "date",
      groupable: false,
      headerName: "Date",
      width: 200,
    },
    {
      field: "created_dt",
      groupable: false,
      headerName: "Created Date",
      width: 200,
    },
    {
      field: "credit_score",
      groupable: false,
      headerName: "Credit Score",
      width: 200,
    },
    {
      field: "dba_name",
      groupable: false,
      headerName: "DBA Name",
      width: 200,
    },
    {
      field: "drivers",
      groupable: false,
      headerName: "Drivers",
      width: 200,
    },
    {
      field: "duns_number",
      groupable: false,
      headerName: "DUNS Number",
      width: 200,
    },
    {
      field: "entity_type",
      groupable: false,
      headerName: "Entity Type",
      width: 200,
    },
    {
      field: "legal_name",
      groupable: false,
      headerName: "Legal Name",
      width: 200,
    },
    {
      field: "mailing_address",
      groupable: false,
      headerName: "Mailing Address",
      width: 200,
    },
    {
      field: "mc_mx_ff_number",
      groupable: false,
      headerName: "MC/MX/FF Number",
      width: 200,
    },
    {
      field: "mcs_150_form_date",
      groupable: false,
      headerName: "MCS 150 Form Date",
      width: 200,
    },
    {
      field: "mcs_150_mileage_year",
      groupable: false,
      headerName: "MCS 150 Mileage Year",
      width: 200,
    },
    {
      field: "operating_status",
      groupable: false,
      headerName: "Operating Status",
      width: 200,
    },
    {
      field: "out_of_service_date",
      groupable: false,
      headerName: "Out of Service Date",
      width: 200,
    },
    {
      field: "phone",
      groupable: false,
      headerName: "Phone",
      width: 200,
    },
    {
      field: "physical_address",
      groupable: false,
      headerName: "Physical Address",
      width: 200,
    },
    {
      field: "power_units",
      groupable: false,
      headerName: "Power Units",
      width: 200,
    },
    {
      field: "record_status",
      groupable: false,
      headerName: "Record Status",
      width: 200,
    },
    {
      field: "state_carrier_id_number",
      groupable: false,
      headerName: "State Carrier ID Number",
      width: 200,
    },
    {
      field: "usdot_number",
      groupable: false,
      headerName: "USDOT Number",
      width: 200,
    },
    {
      field: "m_city",
      groupable: false,
      headerName: "City",
      width: 200,
    },
    {
      field: "m_state",
      groupable: false,
      headerName: "State",
      width: 200,
    },
    {
      field: "m_zip_code",
      groupable: false,
      headerName: "Zip Code",
      width: 200,
    },
  ];

  return (
    <Container>
      <DataGridPremium
        sx={{ height: "500px" }}
        rows={data.rows}
        columns={columns}
        apiRef={apiRef}
        initialState={initialState}
        experimentalFeatures={{ ariaV8: true }}
      />
    </Container>
  );
};

export default PivotTable;
