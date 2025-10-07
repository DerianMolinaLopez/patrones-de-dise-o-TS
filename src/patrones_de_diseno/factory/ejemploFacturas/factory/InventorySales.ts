import Report from '../interfaces/Report.ts';
import ReportFactory from './ReportFactory.ts';

export default class InventorySalesFactory extends ReportFactory {
  createReport(): Report {
    throw new Error('Method not implemented.');
  }
}