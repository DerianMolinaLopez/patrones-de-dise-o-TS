import Report from '../interfaces/Report.ts';
import ReportFactory from './ReportFactory.ts';
import SalesReport from '../Reports/SalesReport.ts';


export default class SalesReportFactory extends ReportFactory {
  createReport(): Report {
     return new SalesReport()
  }
}