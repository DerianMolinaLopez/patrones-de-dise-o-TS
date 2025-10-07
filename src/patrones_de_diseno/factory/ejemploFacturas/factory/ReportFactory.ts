import Report from '../interfaces/Report.ts';

abstract class ReportFactory{
  abstract createReport():Report
  generateReport():void{
    const reporte:Report = this.createReport()
    reporte.generate()
  }
}

export default  ReportFactory