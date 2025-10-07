import ReportFactory from './factory/ReportFactory.ts';
import SalesReportFactory from './factory/SalesReportFactory.ts';
import InventoryReportFactory from './factory/InventoryReportFactory.ts';

function main(){
  const opcion = 2
  let factory :ReportFactory;
  switch (opcion) {
    case 1:
        factory = new SalesReportFactory()
      break;
      case 2:
        factory = new InventoryReportFactory()
      break;

  }

  factory.generateReport()
}
main()