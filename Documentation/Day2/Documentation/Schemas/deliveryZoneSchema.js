export default {
    name: 'deliveryZone',
    type: 'document',
    title: 'Delivery Zone',
    fields: [
      { name: 'zoneName', type: 'string', title: 'Zone Name' },
      { name: 'coverageArea', type: 'text', title: 'Coverage Area (Postal Codes)' },
      { name: 'assignedDrivers', type: 'array', of: [{ type: 'string' }], title: 'Assigned Drivers' },
    ],
  };
  