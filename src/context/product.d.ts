export interface IProduct {
  created_dt: string,
  credit_score: string,
  data_source_modified_dt: string,
  dba_name: string,
  drivers: string,
  duns_number: string,
  entity_type: string,
  id: string,
  legal_name: string,
  m_city: string,
  m_state: string,
  m_street: string,
  m_zip_code: string,
  mailing_address: string,
  mc_mx_ff_number: string,
  mcs_150_form_date: string,
  mcs_150_mileage_year: string,
  operating_status: string,
  out_of_service_date: string,
  p_city: string,
  p_state: string,
  p_street: string,
  p_zip_code: string,
  phone: string,
  physical_address: string,
  power_units: string,
  record_status: string,
  state_carrier_id_number: string,
  usdot_number: string,
}

export type ProductContextStorageType = {
    products: IProduct[];
}

// Helper Type Function
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };
  