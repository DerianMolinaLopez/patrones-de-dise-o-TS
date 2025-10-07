import Report from '../interfaces/Report.ts';

export default  class InventoryReport implements Report {
  generate(): void {
    console.log("Generando reporte de inventarios")
  }
}