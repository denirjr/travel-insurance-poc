export interface SimulationResult {
  plus: plan[];
  default: plan[];
}

export interface plan {
  assMedica: string;
  despesaFarmacia: string;
  seguro: string;
  localizacaoBagagem: boolean;
  perdaDocumento: boolean;
  concierge: boolean;
  value: string;
}