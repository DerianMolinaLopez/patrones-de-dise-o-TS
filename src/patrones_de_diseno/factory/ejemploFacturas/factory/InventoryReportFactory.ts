import Report from '../interfaces/Report.ts';
import ReportFactory from './ReportFactory.ts';
import InventoryReport from '../Reports/InventoryReport.ts';

export default class InventoryReportFactory extends ReportFactory {
  createReport(): Report {
    return new InventoryReport()
  }
}
