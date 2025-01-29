export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email Address' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'text', title: 'Delivery Address' },
      { name: 'orderHistory', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], title: 'Order History' },
    ],
  };
  