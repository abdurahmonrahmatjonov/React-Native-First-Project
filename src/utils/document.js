import moment from 'moment';

export const aggregateDocuments = data => {
  const aggregatedData = data.reduce((acc, entry) => {
    entry.documentLines.forEach(line => {
      const key = `${entry.docEntry}`;
      if (!acc[key]) {
        acc[key] = {
          docEntry: entry.docEntry,
          docNum: entry.docNum,
          cardCode: entry.cardCode,
          cardName: entry.cardName,
          date: moment(entry.docDate).format('DD-MM-YYYY'),
          docDueDate: entry.docDueDate,
          docTotal: entry.docTotal,
          ownerCode: entry.ownerCode,
          docTotalQuantity: entry.docTotalQuantity,
          salesPersonCode: entry.salesPersonCode,
          slpName: entry.slpName,
          docCur: entry.docCur,
          comments: entry.comments,
          itemCode: [],
          lineNum: [],
          lineStatus: [],
          itemName: [],
          baseType: [],
          baseEntry: [],
          baseLine: [],
          quantity: [],
          whsCode: [],
          whsName: [],
          measureUnit: [],
          price: [],
          inventoryQuantity: [],
          discountPercent: [],
          lineTotal: [],
          currency: [],
          openInvQty: [],
          openQty: [],
          ugpName: [],
          total: 0,
        };
      }
      acc[key].itemCode.push(line.itemCode);
      acc[key].lineStatus.push(line.lineStatus);
      acc[key].itemName.push(line.itemDescription);
      acc[key].baseType.push(line.baseType);
      acc[key].baseEntry.push(line.baseEntry);
      acc[key].baseLine.push(line.baseLine);
      acc[key].quantity.push(line.quantity);
      acc[key].whsCode.push(line.warehouseCode);
      acc[key].whsName.push(line.whsName);
      acc[key].lineNum.push(line.lineNum);
      acc[key].measureUnit.push(line.measureUnit);
      acc[key].price.push(line.price);
      acc[key].inventoryQuantity.push(line.inventoryQuantity);
      acc[key].discountPercent.push(line.discountPercent);
      acc[key].lineTotal.push(line.lineTotal);
      acc[key].currency.push(line.currency);
      acc[key].openInvQty.push(line.openInvQty);
      acc[key].openQty.push(line.openQty);
      acc[key].ugpName.push(line.ugpName);
      acc[key].total += entry.docTotal;
    });
    return acc;
  }, {});

  const aggregatedArray = Object.values(aggregatedData);

  aggregatedArray.sort((a, b) => b.docEntry - a.docEntry);

  return aggregatedArray;
};

export const aggregateDocumentsWithDriver = data => {
  const aggregatedData = data.reduce((acc, entry) => {
    entry.documentLines.forEach(line => {
      const key = `${entry.docEntry}`;
      if (!acc[key]) {
        acc[key] = {
          docEntry: entry.docEntry,
          docNum: entry.docNum,
          cardCode: entry.cardCode,
          cardName: entry.cardName,
          date: moment(entry.docDate).format('DD-MM-YYYY'),
          docDueDate: entry.docDueDate,
          docTotal: entry.docTotal,
          ownerCode: entry.ownerCode,
          salesPersonCode: entry.salesPersonCode,
          docTotalQuantity: entry.docTotalQuantity,
          driver: `${entry.driverFirstName} ${entry.driverLastName}`,
          slpName: entry.slpName,
          docCur: entry.docCur,
          comments: entry.comments,
          itemCode: [],
          itemName: [],
          baseType: [],
          baseEntry: [],
          lineNum: [],
          baseLine: [],
          quantity: [],
          whsCode: [],
          lineStatus: [],
          whsName: [],
          measureUnit: [],
          price: [],
          inventoryQuantity: [],
          discountPercent: [],
          lineTotal: [],
          currency: [],
          openInvQty: [],
          openQty: [],
          ugpName: [],
        };
      }
      acc[key].itemCode.push(line.itemCode);
      acc[key].lineStatus.push(line.lineStatus);
      acc[key].itemName.push(line.itemDescription);
      acc[key].baseType.push(line.baseType);
      acc[key].baseEntry.push(line.baseEntry);
      acc[key].baseLine.push(line.baseLine);
      acc[key].lineNum.push(line.lineNum);
      acc[key].quantity.push(line.quantity);
      acc[key].whsCode.push(line.warehouseCode);
      acc[key].whsName.push(line.whsName);
      acc[key].measureUnit.push(line.measureUnit);
      acc[key].price.push(line.price);
      acc[key].inventoryQuantity.push(line.inventoryQuantity);
      acc[key].discountPercent.push(line.discountPercent);
      acc[key].lineTotal.push(line.lineTotal);
      acc[key].currency.push(line.currency);
      acc[key].openInvQty.push(line.openInvQty);

      acc[key].ugpName.push(line.ugpName);

      acc[key].openQty.push(line.openQty);
    });
    return acc;
  }, {});

  const aggregatedArray = Object.values(aggregatedData);

  aggregatedArray.sort((a, b) => b.docEntry - a.docEntry);

  return aggregatedArray;
};

export const aggregateDocumentsSales = data => {
  const aggregatedData = data.reduce((acc, entry) => {
    entry.documentLines.forEach(line => {
      const key = `${entry.docEntry}`;
      if (!acc[key]) {
        acc[key] = {
          docEntry: entry.docEntry,
          docNum: entry.docNum,
          cardCode: entry.cardCode,
          cardName: entry.cardName,
          date: moment(entry.docDate).format('DD-MM-YYYY'),
          docDueDate: entry.docDueDate,
          docTotal: entry.docTotal,
          ownerCode: entry.ownerCode,
          salesPersonCode: entry.salesPersonCode,
          docTotalQuantity: entry.docTotalQuantity,
          driver: `${entry.driverFirstName} ${entry.driverLastName}`,
          slpName: entry.slpName,
          u_Father_DocNum: entry.u_Father_DocNum,
          u_Driver: entry.u_Driver,
          docCur: entry.docCur,
          comments: entry.comments,
          itemCode: [],
          itemName: [],
          baseType: [],
          baseEntry: [],
          lineNum: [],
          lineStatus: [],
          baseLine: [],
          quantity: [],
          whsCode: [],
          whsName: [],
          measureUnit: [],
          price: [],
          inventoryQuantity: [],
          discountPercent: [],
          lineTotal: [],
          currency: [],
          openInvQty: [],
          openQty: [],
          ugpName: [],
        };
      }
      acc[key].itemCode.push(line.itemCode);
      acc[key].itemName.push(line.itemDescription);
      acc[key].baseType.push(line.baseType);
      acc[key].baseEntry.push(line.baseEntry);
      acc[key].baseLine.push(line.baseLine);
      acc[key].lineNum.push(line.lineNum);
      acc[key].lineStatus.push(line.lineStatus);
      acc[key].quantity.push(line.quantity);
      acc[key].whsCode.push(line.warehouseCode);
      acc[key].whsName.push(line.whsName);
      acc[key].measureUnit.push(line.measureUnit);
      acc[key].price.push(line.price);
      acc[key].inventoryQuantity.push(line.inventoryQuantity);
      acc[key].discountPercent.push(line.discountPercent);
      acc[key].lineTotal.push(line.lineTotal);
      acc[key].currency.push(line.currency);
      acc[key].openInvQty.push(line.openInvQty);
      acc[key].openQty.push(line.openQty);

      acc[key].ugpName.push(line.ugpName);
    });
    return acc;
  }, {});

  const aggregatedArray = Object.values(aggregatedData);

  aggregatedArray.sort((a, b) => b.docEntry - a.docEntry);

  return aggregatedArray;
};

export const aggregateStockTransferLines = data => {
  const aggregatedData = {};

  if (Array.isArray(data)) {
    data.forEach(entry => {
      if (entry && Array.isArray(entry.stockTransferLines)) {
        entry.stockTransferLines.forEach(line => {
          if (!aggregatedData[entry.docEntry]) {
            aggregatedData[entry.docEntry] = {
              docEntry: entry.docEntry,
              itemDescription: [],
              quantity: [],
              warehouseCode: line.warehouseCode,
              warehouseName: line.warehouseName,
              fromWarehouseCode: line.fromWarehouseCode,
              fromWarehouseName: line.fromWarehouseName,
              sum: 0,
            };
          }

          aggregatedData[entry.docEntry].itemDescription.push(
            line.itemDescription,
          );
          aggregatedData[entry.docEntry].quantity.push(line.quantity);
          aggregatedData[entry.docEntry].sum += line.quantity;
        });
      }
    });
  }

  const aggregatedArray = Object.values(aggregatedData);

  aggregatedArray.sort((a, b) => b.docEntry - a.docEntry);

  return aggregatedArray;
};

export const aggregatePurchases = data => {
  const aggregatedData = data.reduce((acc, entry) => {
    entry.documentLines.forEach(line => {
      const key = `${entry.docNum}`;
      if (!acc[key]) {
        acc[key] = {
          docNum: entry.docNum,
          cardCode: entry.cardCode,
          cardName: entry.cardName,
          docTotal: entry.docTotal,
          date: moment(entry.docDueDate).format('DD-MM-YYYY'),
          ownerCode: entry.documentsOwner,
          docTotalQuantity: entry.docTotalQuantity,
          itemCode: [],
          itemName: [],
          quantity: [],
          whsCode: [],
          warehouseName: [],
          inventoryQuantity: [],
          measureUnit: [],
          price: [],
          currency: [],
          lineTotal: [],
          ugpName: [],
          total: 0,
        };
      }
      acc[key].itemCode.push(line.itemCode);
      acc[key].itemName.push(line.itemDescription);
      acc[key].quantity.push(line.quantity);
      acc[key].whsCode.push(line.warehouseCode);
      acc[key].warehouseName.push(line.whsName);
      acc[key].lineTotal.push(line.lineTotal);
      acc[key].price.push(line.price);
      acc[key].currency.push(line.currency);
      acc[key].measureUnit.push(line.measureUnit);
      acc[key].inventoryQuantity.push(line.inventoryQuantity);
      acc[key].ugpName.push(line.ugpName);
      acc[key].total += line.lineTotal;
    });
    return acc;
  }, {});

  const aggregatedArray = Object.values(aggregatedData);

  aggregatedArray.sort((a, b) => b.docNum - a.docNum);

  return aggregatedArray;
};

export const formattedClient = data => {
  return {
    cardName: data.cardName,
    code: data.cardCode,
    balance: data.balance,
    balanceFirstDayOfPeriod: data.balanceFirstDayOfPeriod,
    transactions: data.businessPartnerInfoLines.map(line => ({
      debit: line.debit,
      credit: line.credit,
      docNum: line.docNum,
      memo: line.lineMemo,
      dueDate: line.dueDate,
      cumulativeBalance: line.cumulativeBalance,
    })),
  };
};

export const formattedDataDebtor = data => {
  return data.map((item, index) => ({
    region: item.region,
    realizators: item.realizators,
    balanceFirstDayOfTheMonth: item.balanceFirstDayOfTheMonth,
    purchasedProduct: item.purchasedProduct,
    paidMoney: item.paidMoney,
    balance: item.currentAccountBalance,
    totalAmountReceived: item.totalAmountReceived,
    balanceLastDayOfTheMonth: item.balanceLastDayOfTheMonth,
    salesPerson: item.salesPerson,
    moneySpeed: item.moneySpeed,
  }));
};

export const formattedDataClient = data => {
  return data.map((item, index) => ({
    cardCode: item.cardCode,
    region: item.region,
    realizators: item.realizators,
    balanceFirstDayOfTheMonth: item.balanceFirstDayOfTheMonth,
    purchasedProduct: item.purchasedProduct,
    paidMoney: item.paidMoney,
    balance: item.currentAccountBalance,
    totalAmountReceived: item.totalAmountReceived,
    balanceLastDayOfTheMonth: item.balanceLastDayOfTheMonth,
    salesPerson: item.salesPerson,
    moneySpeed: item.moneySpeed,
  }));
};

export const formattedTracking = data => {
  return data.map((item, index) => ({
    dscription: item.dscription,
    itmsGrpNam: item.itmsGrpNam,
    quantity: item.quantity,
    unitMsr: item.unitMsr,
    invQty: item.invQty,
    ugpName: item.ugpName,
    u_typeOfTransport: item.u_typeOfTransport,
    u_tracking: item.u_tracking,
    u_numberOfTransport: item.u_numberOfTransport,
    docDate: item.docDate,
  }));
};

export const formattedShippedReports = data => {
  return data.map((item, index) => ({
    dscription: item.dscription,
    itmsGrpNam: item.itmsGrpNam,
    totalQuantity: item.totalQuantity,
    unitMsr: item.unitMsr,
    totalInvQty: item.totalInvQty,
    ugpName: item.ugpName,
    docDueDate: item.docDueDate,
  }));
};

export const calculateTotalTracking = data => {
  const totals = data.reduce(
    (acc, item) => {
      acc.quantity += item.quantity;
      acc.invQty += item.invQty;

      return acc;
    },
    {
      quantity: 0,
      invQty: 0,
    },
  );

  return totals;
};

export const calculateTotal = data => {
  const totals = data.reduce(
    (acc, item) => {
      acc.totalQuantity += item.totalQuantity;
      acc.totalInvQty += item.totalInvQty;

      return acc;
    },
    {
      totalQuantity: 0,
      totalInvQty: 0,
    },
  );

  return totals;
};

export const calculateTotals = data => {
  const totals = data.reduce(
    (acc, item) => {
      acc.balanceFirstDayOfTheMonth += item.balanceFirstDayOfTheMonth;
      acc.purchasedProduct += item.purchasedProduct;
      acc.paidMoney += item.paidMoney;
      acc.balance += item.currentAccountBalance;
      acc.totalAmountReceived += item.totalAmountReceived;
      acc.balanceLastDayOfTheMonth += item.balanceLastDayOfTheMonth;
      acc.moneySpeed += item.moneySpeed;
      return acc;
    },
    {
      balanceFirstDayOfTheMonth: 0,
      purchasedProduct: 0,
      paidMoney: 0,
      balance: 0,
      totalAmountReceived: 0,
      balanceLastDayOfTheMonth: 0,
      moneySpeed: 0,
    },
  );

  return totals;
};

export const calculateSales = data => {
  const totals = data.reduce(
    (acc, item) => {
      acc.docTotal += item.docTotal;

      return acc;
    },
    {
      docTotal: 0,
    },
  );

  return totals;
};
