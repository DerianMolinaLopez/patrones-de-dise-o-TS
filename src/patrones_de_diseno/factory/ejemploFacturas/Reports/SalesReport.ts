
import Report from '../interfaces/Report.ts';

export default class SalesReport implements Report {
  generate(): void {
    console.log("Generando reporte de ventas")
  }
}