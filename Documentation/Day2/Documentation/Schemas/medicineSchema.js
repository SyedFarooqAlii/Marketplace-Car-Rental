export default {
    name: 'medicine',
    type: 'document',
    title: 'Medicine',
    fields: [
      { name: 'name', type: 'string', title: 'Medicine Name' },
      { name: 'category', type: 'string', title: 'Category', options: { list: ['OTC', 'Prescription'] } },
      { name: 'price', type: 'number', title: 'Price (USD)' },
      { name: 'stock', type: 'number', title: 'Stock Quantity' },
      { name: 'requiresPrescription', type: 'boolean', title: 'Requires Prescription' },
      { name: 'expiryDate', type: 'date', title: 'Expiry Date' },
    ],
  };
  