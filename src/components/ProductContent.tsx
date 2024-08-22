import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Box,
  Popover,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { IProduct } from "../context/product";
import ResizeIcon from "@mui/icons-material/DragHandle";
import { TableContainer, HeaderCellContainer } from "./styles.ProductContent";
import { useSort } from "@table-library/react-table-library/sort";

type ProductProps = {
  products: IProduct[];
  handleUpdate: (value: string, id: string, name: string) => void;
};

const Product: React.FC<ProductProps> = ({ products, handleUpdate }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const data = { nodes: products };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const columnsData = [
    { label: "ID", value: "id", sortLabel: "ID" },
    { label: "Created Date", value: "created_dt", sortLabel: "CREATED_DT" },
    { label: "Credit Score", value: "credit_score", sortLabel: "CREDIT_SCORE" },
    { label: "DBA Name", value: "dba_name", sortLabel: "DBA_NAME" },
    { label: "Drivers", value: "drivers", sortLabel: "DRIVERS" },
    { label: "DUNS Number", value: "duns_number", sortLabel: "DUNS_NUMBER" },
    { label: "Entity Type", value: "entity_type", sortLabel: "ENTITY_TYPE" },
    { label: "Legal Name", value: "legal_name", sortLabel: "LEGAL_NAME" },
    {
      label: "Mailing Address",
      value: "mailing_address",
      sortLabel: "MAILING_ADDRESS",
    },
    {
      label: "MC/MX/FF Number",
      value: "mc_mx_ff_number",
      sortLabel: "MC_MX_FF_NUMBER",
    },
    {
      label: "MCS 150 Form Date",
      value: "mcs_150_form_date",
      sortLabel: "MCS_150_FORM_DATE",
    },
    {
      label: "MCS 150 Mileage Year",
      value: "mcs_150_mileage_year",
      sortLabel: "MCS_150_MILEAGE_YEAR",
    },
    {
      label: "Operating Status",
      value: "operating_status",
      sortLabel: "OPERATING_STATUS",
    },
    {
      label: "Out of Service Date",
      value: "out_of_service_date",
      sortLabel: "OUT_OF_SERVICE_DATE",
    },
    { label: "Phone", value: "phone", sortLabel: "PHONE" },
    {
      label: "Physical Address",
      value: "physical_address",
      sortLabel: "PHYSICAL_ADDRESS",
    },
    { label: "Power Units", value: "power_units", sortLabel: "POWER_UNITS" },
    {
      label: "Record Status",
      value: "record_status",
      sortLabel: "RECORD_STATUS",
    },
    {
      label: "State Carrier ID Number",
      value: "state_carrier_id_number",
      sortLabel: "STATE_CARRIER_ID_NUMBER",
    },
    { label: "USDOT Number", value: "usdot_number", sortLabel: "USDOT_NUMBER" },
    { label: "City", value: "m_city", sortLabel: "M_CITY" },
    { label: "Street", value: "m_street", sortLabel: "M_STREET" },
    { label: "State", value: "m_state", sortLabel: "M_STATE" },
    { label: "Zip Code", value: "m_zip_code", sortLabel: "M_ZIP_CODE" },
  ];

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: 135px 165px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px 135px;
        --data-table-library_grid-template-rows: auto;
      `,
    },
  ]);

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        CREATED_DATE: (array) =>
          array.sort(
            (a, b) =>
              new Date(a.created_dt).getTime() -
              new Date(b.created_dt).getTime()
          ),
        CREDIT_SCORE: (array) =>
          array.sort((a, b) => (a.credit_score || 0) - (b.credit_score || 0)),
        DBA_NAME: (array) =>
          array.sort((a, b) =>
            (a.dba_name || "").localeCompare(b.dba_name || "")
          ),
        DRIVERS: (array) =>
          array.sort((a, b) =>
            (a.drivers || "").localeCompare(b.drivers || "")
          ),
        DUNS_NUMBER: (array) =>
          array.sort((a, b) =>
            (a.duns_number || "").localeCompare(b.duns_number || "")
          ),
        ENTITY_TYPE: (array) =>
          array.sort((a, b) =>
            (a.entity_type || "").localeCompare(b.entity_type || "")
          ),
        LEGAL_NAME: (array) =>
          array.sort((a, b) =>
            (a.legal_name || "").localeCompare(b.legal_name || "")
          ),
        M_CITY: (array) =>
          array.sort((a, b) => (a.m_city || "").localeCompare(b.m_city || "")),
        M_STATE: (array) =>
          array.sort((a, b) =>
            (a.m_state || "").localeCompare(b.m_state || "")
          ),
        M_STREET: (array) =>
          array.sort((a, b) =>
            (a.m_street || "").localeCompare(b.m_street || "")
          ),
        M_ZIP_CODE: (array) =>
          array.sort((a, b) =>
            (a.m_zip_code || "").localeCompare(b.m_zip_code || "")
          ),
        MAILING_ADDRESS: (array) =>
          array.sort((a, b) =>
            (a.mailing_address || "").localeCompare(b.mailing_address || "")
          ),
        MC_MX_FF_NUMBER: (array) =>
          array.sort((a, b) =>
            (a.mc_mx_ff_number || "").localeCompare(b.mc_mx_ff_number || "")
          ),
        MCS_150_FORM_DATE: (array) =>
          array.sort((a, b) =>
            (a.mcs_150_form_date || "").localeCompare(b.mcs_150_form_date || "")
          ),
        MCS_150_MILEAGE_YEAR: (array) =>
          array.sort((a, b) =>
            (a.mcs_150_mileage_year || "").localeCompare(
              b.mcs_150_mileage_year || ""
            )
          ),
        OPERATING_STATUS: (array) =>
          array.sort((a, b) =>
            (a.operating_status || "").localeCompare(b.operating_status || "")
          ),
        OUT_OF_SERVICE_DATE: (array) =>
          array.sort((a, b) =>
            (a.out_of_service_date || "").localeCompare(
              b.out_of_service_date || ""
            )
          ),
        PHONE: (array) =>
          array.sort((a, b) => (a.phone || "").localeCompare(b.phone || "")),
        PHYSICAL_ADDRESS: (array) =>
          array.sort((a, b) =>
            (a.physical_address || "").localeCompare(b.physical_address || "")
          ),
        POWER_UNITS: (array) =>
          array.sort((a, b) =>
            (a.power_units || "").localeCompare(b.power_units || "")
          ),
        RECORD_STATUS: (array) =>
          array.sort((a, b) =>
            (a.record_status || "").localeCompare(b.record_status || "")
          ),
        STATE_CARRIER_ID_NUMBER: (array) =>
          array.sort((a, b) =>
            (a.state_carrier_id_number || "").localeCompare(
              b.state_carrier_id_number || ""
            )
          ),
        USDOT_NUMBER: (array) =>
          array.sort((a, b) =>
            (a.usdot_number || "").localeCompare(b.usdot_number || "")
          ),
      },
    }
  );

  function onSortChange(action: any, state: any) {
    console.log(action, state);
  }
  const initialVisibleColumns = columnsData.map((column) => column.label);
  const [visibleColumns, setVisibleColumns] = useState([
    ...initialVisibleColumns,
  ]);

  const COLUMNS = [
    {
      label: "ID",
      renderCell: (item: any) => item.id,
      sort: { sortKey: "ID" },
      resize: true,
      hide: !visibleColumns.includes("ID"),
    },
    {
      label: "Created Date",
      sort: { sortKey: "CREATED_DATE" },
      resize: true,
      hide: !visibleColumns.includes("Created Date"),
      renderCell: (item: IProduct) => {
        const date = new Date(item.created_dt);
        const formattedDate = date.toISOString().substr(0, 10);
        return (
          <input
            type="date"
            style={{
              width: "100%",
              border: "none",
              fontSize: "1rem",
              padding: 0,
              margin: 0,
            }}
            value={formattedDate}
            onChange={(event) => {
              const newDate = event.target.value;
              handleUpdate(newDate, item.id, "created_dt");
            }}
          />
        );
      },
    },
    {
      label: "Credit Score",
      renderCell: (item: any) => item.credit_score,
      sort: { sortKey: "CREDIT_SCORE" },
      resize: true,
      hide: !visibleColumns.includes("Credit Score"),
    },
    {
      label: "DBA Name",
      sort: { sortKey: "DBA_NAME" },
      resize: true,
      hide: !visibleColumns.includes("DBA Name"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.dba_name}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "dba_name")
          }
        />
      ),
    },
    {
      label: "Drivers",
      sort: { sortKey: "DRIVERS" },
      resize: true,
      hide: !visibleColumns.includes("Drivers"),
      renderCell: (item: IProduct) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.drivers}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "drivers")
          }
        />
      ),
    },
    {
      label: "DUNS Number",
      sort: { sortKey: "DUNS_NUMBER" },
      resize: true,
      hide: !visibleColumns.includes("DUNS Number"),
      renderCell: (item: IProduct) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.duns_number}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "duns_number")
          }
        />
      ),
    },
    {
      label: "Entity Type",
      sort: { sortKey: "ENTITY_TYPE" },
      resize: true,
      hide: !visibleColumns.includes("Entity Type"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.entity_type}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "entity_type")
          }
        />
      ),
    },
    {
      label: "Legal Name",
      sort: { sortKey: "LEGAL_NAME" },
      resize: true,
      hide: !visibleColumns.includes("Legal Name"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.legal_name}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "legal_name")
          }
        />
      ),
    },
    {
      label: "Mailing Address",
      sort: { sortKey: "MAILING_ADDRESS" },
      resize: true,
      hide: !visibleColumns.includes("Mailing Address"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.mailing_address}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "mailing_address")
          }
        />
      ),
    },
    {
      label: "MC/MX/FF Number",
      sort: { sortKey: "MC_MX_FF_NUMBER" },
      resize: true,
      hide: !visibleColumns.includes("MC/MX/FF Number"),
      renderCell: (item: IProduct) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.mc_mx_ff_number}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "mc_mx_ff_number")
          }
        />
      ),
    },
    {
      label: "MCS 150 Form Date",
      sort: { sortKey: "MCS_150_FORM_DATE" },
      resize: true,
      hide: !visibleColumns.includes("MCS 150 Form Date"),
      renderCell: (item: IProduct) => {
        const date = new Date(item.mcs_150_form_date);
        const formattedDate = date.toISOString().substr(0, 10);
        return (
          <input
            type="date"
            style={{
              width: "100%",
              border: "none",
              fontSize: "1rem",
              padding: 0,
              margin: 0,
            }}
            value={formattedDate}
            onChange={(event) => {
              const newDate = event.target.value;
              handleUpdate(newDate, item.id, "mcs_150_form_date");
            }}
          />
        );
      },
    },
    {
      label: "MCS 150 Mileage Year",
      sort: { sortKey: "MCS_150_MILEAGE_YEAR" },
      resize: true,
      hide: !visibleColumns.includes("MCS 150 Mileage Year"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.mcs_150_mileage_year}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "mcs_150_mileage_year")
          }
        />
      ),
    },
    {
      label: "Operating Status",
      sort: { sortKey: "OPERATING_STATUS" },
      resize: true,
      hide: !visibleColumns.includes("Operating Status"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.operating_status}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "operating_status")
          }
        />
      ),
    },
    {
      label: "Out of Service Date",
      sort: { sortKey: "OUT_OF_SERVICE_DATE" },
      resize: true,
      hide: !visibleColumns.includes("Out of Service Date"),
      renderCell: (item: IProduct) => {
        const date = item.out_of_service_date
          ? new Date(item.out_of_service_date)
          : new Date();
        const formattedDate = item.out_of_service_date
          ? date.toISOString().substr(0, 10)
          : "";
        return (
          <input
            type="date"
            style={{
              width: "100%",
              border: "none",
              fontSize: "1rem",
              padding: 0,
              margin: 0,
            }}
            value={formattedDate}
            onChange={(event) => {
              const newDate = event.target.value;
              handleUpdate(newDate, item.id, "out_of_service_date");
            }}
          />
        );
      },
    },
    {
      label: "Phone",

      sort: { sortKey: "PHONE" },
      resize: true,
      hide: !visibleColumns.includes("Phone"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.phone}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "phone")
          }
        />
      ),
    },
    {
      label: "Physical Address",
      sort: { sortKey: "PHYSICAL_ADDRESS" },
      resize: true,
      hide: !visibleColumns.includes("Physical Address"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.physical_address}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "physical_address")
          }
        />
      ),
    },
    {
      label: "Power Units",
      sort: { sortKey: "POWER_UNITS" },
      resize: true,
      hide: !visibleColumns.includes("Power Units"),
      renderCell: (item: IProduct) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.power_units}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "power_units")
          }
        />
      ),
    },
    {
      label: "Record Status",
      sort: { sortKey: "RECORD_STATUS" },
      resize: true,
      hide: !visibleColumns.includes("Record Status"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.record_status}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "record_status")
          }
        />
      ),
    },
    {
      label: "State Carrier ID Number",
      sort: { sortKey: "STATE_CARRIER_ID_NUMBER" },
      resize: true,
      hide: !visibleColumns.includes("State Carrier ID Number"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.state_carrier_id_number}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "state_carrier_id_number")
          }
        />
      ),
    },
    {
      label: "USDOT Number",
      sort: { sortKey: "USDOT_NUMBER" },
      resize: true,
      hide: !visibleColumns.includes("USDOT Number"),
      renderCell: (item: IProduct) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.usdot_number}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "usdot_number")
          }
        />
      ),
    },
    {
      label: "City",
      sort: { sortKey: "M_CITY" },
      resize: true,
      hide: !visibleColumns.includes("City"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.m_city}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "m_city")
          }
        />
      ),
    },
    {
      label: "Street",
      sort: { sortKey: "M_STREET" },
      resize: true,
      hide: !visibleColumns.includes("Street"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.m_street}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "m_street")
          }
        />
      ),
    },
    {
      label: "State",
      sort: { sortKey: "M_STATE" },
      resize: true,
      hide: !visibleColumns.includes("State"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.m_state}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "m_state")
          }
        />
      ),
    },
    {
      label: "Zip Code",
      sort: { sortKey: "M_ZIP_CODE" },
      resize: true,
      hide: !visibleColumns.includes("Zip Code"),
      renderCell: (item: IProduct) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.m_zip_code}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "m_zip_code")
          }
        />
      ),
    },
  ];

  const HeaderCell = ({ column }: any) => {
    return (
      <HeaderCellContainer>
        <div>{column.label}</div>
        <IconButton
          style={{
            width: "10px",
            height: "100%",
            backgroundColor: "#ddd",
            position: "absolute",
            right: "0",
            top: "0",
            cursor: "col-resize",
            zIndex: 10,
          }}
          size="small"
          aria-label="resize"
        >
          <ResizeIcon />
        </IconButton>
      </HeaderCellContainer>
    );
  };

  const hideColumn = (label: string) => {
    if (visibleColumns.includes(label)) {
      setVisibleColumns(visibleColumns.filter((v) => v !== label));
    } else {
      setVisibleColumns(visibleColumns.concat(label));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 4,
            border: 1,
            borderColor: "#ccc",
            overflow: "hidden",
          }}
        >
          {data && (
            <TableContainer>
              <Button
                aria-describedby={id}
                variant="outlined"
                size="medium"
                onClick={handleClick}
                sx={{ mb: 5 }}
              >
                Filter BY
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 2,
                    paddingX: 4,
                    paddingY: 2,
                  }}
                >
                  {COLUMNS.map(({ label }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={() => hideColumn(label)}
                          checked={visibleColumns.includes(label)}
                        />
                      }
                      label={label}
                      sx={{ minWidth: "0", flexGrow: 1 }}
                    />
                  ))}
                </Box>
              </Popover>

              <CompactTable
                columns={COLUMNS}
                data={data}
                sort={sort}
                theme={theme}
                layout={{ custom: true, horizontalScroll: true }}
                HeaderCell={HeaderCell}
              />
            </TableContainer>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
